using Application.DTOs;
using AutoMapper;
using Domain.Entities;
using Domain.Interfaces;

namespace Application.Services
{
    public class AnimalService
    {
        private readonly IAnimalRepository _repo;
        private readonly IMapper _mapper;

        public AnimalService(IAnimalRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        public async Task<IEnumerable<AnimalReadDto>> GetAllAsync()
        {
            var animals = await _repo.GetAllAsync();
            return _mapper.Map<IEnumerable<AnimalReadDto>>(animals);
        }

        public async Task<AnimalReadDto?> GetByIdAsync(int id)
        {
            var animal = await _repo.GetByIdAsync(id);
            return animal == null ? null : _mapper.Map<AnimalReadDto>(animal);
        }

        public async Task<AnimalReadDto> CreateAsync(AnimalCreateDto dto)
        {
            var entity = _mapper.Map<Animal>(dto);
            var created = await _repo.AddAsync(entity);
            return _mapper.Map<AnimalReadDto>(created);
        }

        public async Task UpdateAsync(AnimalUpdateDto dto)
        {
            var entity = _mapper.Map<Animal>(dto);
            await _repo.UpdateAsync(entity);
        }

        public async Task DeleteAsync(int id)
        {
            await _repo.DeleteAsync(id);
        }
    }
}
