using Application.DTOs;
using AutoMapper;
using Domain.Entities;
using Domain.Interfaces;

namespace Application.Services
{
    public class AnimalReproductiveRecordService
    {
        private readonly IAnimalReproductiveRecordRepository _repo;
        private readonly IAnimalRepository _animalRepo;
        private readonly IMapper _mapper;

        public AnimalReproductiveRecordService(
            IAnimalReproductiveRecordRepository repo, 
            IAnimalRepository animalRepo,
            IMapper mapper)
        {
            _repo = repo;
            _animalRepo = animalRepo;
            _mapper = mapper;
        }

        public async Task<IEnumerable<AnimalReproductiveRecordReadDto>> GetAllAsync()
        {
            var animalReproductiveRecords = await _repo.GetAllAsync();
            return _mapper.Map<IEnumerable<AnimalReproductiveRecordReadDto>>(animalReproductiveRecords);
        }

        public async Task<AnimalReproductiveRecordReadDto?> GetByIdAsync(int id)
        {
            var animalReproductiveRecord = await _repo.GetByIdAsync(id);
            return animalReproductiveRecord == null ? null : _mapper.Map<AnimalReproductiveRecordReadDto>(animalReproductiveRecord);
        }

        public async Task<AnimalReproductiveRecordReadDto> CreateAsync(AnimalReproductiveRecordCreateDto dto)
        {
            // 🔹 Validación 1: animales distintos
            if (dto.MotherId == dto.FatherId)
                throw new ArgumentException("La madre y el padre no pueden ser el mismo animal.");

            // 🔹 Obtener madre y padre
            var mother = await _animalRepo.GetByIdAsync(dto.MotherId)
                ?? throw new ArgumentException("La madre seleccionada no existe.");
            var father = await _animalRepo.GetByIdAsync(dto.FatherId)
                ?? throw new ArgumentException("El padre seleccionado no existe.");

            // 🔹 Validación 2: sexo correcto
            //if (!string.Equals(mother.Sex, "hembra", StringComparison.OrdinalIgnoreCase))
            //    throw new ArgumentException($"El animal con ID {mother.Id} no es hembra.");
            //if (!string.Equals(father.Sex, "macho", StringComparison.OrdinalIgnoreCase))
            //    throw new ArgumentException($"El animal con ID {father.Id} no es macho.");

            // 🔹 Validación 3: disponibilidad
            //var estadosPermitidos = new[] { "Activo", "Disponible" };
            //if (!estadosPermitidos.Contains(mother.Status?.Name))
            //    throw new ArgumentException($"La madre con ID {mother.Id} no está disponible para reproducción.");
            //if (!estadosPermitidos.Contains(father.Status?.Name))
            //    throw new ArgumentException($"El padre con ID {father.Id} no está disponible para reproducción.");

            // 🔹 Validación 4: evitar duplicados confirmados
            //var existe = await _repo.ExistsActivePairAsync(dto.MotherId, dto.FatherId);
            //if (existe)
            //    throw new ArgumentException("Ya existe un registro activo entre esta pareja.");

            //var ageMother = (DateTime.UtcNow - mother.BirthDate).TotalDays / 30;
            //if (ageMother < 6)
            //    throw new ArgumentException("La madre no cumple la edad mínima de 6 meses para reproducción.");

            // 🔹 Crear entidad
            var entity = _mapper.Map<AnimalReproductiveRecord>(dto);
            var created = await _repo.AddAsync(entity);

            // 🔹 Cargar relaciones
            var fullEntity = await _repo.GetByIdAsync(created.Id);

            return _mapper.Map<AnimalReproductiveRecordReadDto>(fullEntity);
        }

        public async Task UpdateAsync(AnimalReproductiveRecordUpdateDto dto)
        {
            var entity = _mapper.Map<AnimalReproductiveRecord>(dto);
            await _repo.UpdateAsync(entity);
        }

        public async Task DeleteAsync(int id)
        {
            await _repo.DeleteAsync(id);
        }
    }
}
