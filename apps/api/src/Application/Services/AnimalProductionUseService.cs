using Application.DTOs;
using AutoMapper;
using Domain.Entities;
using Domain.Interfaces;

namespace Application.Services
{
    public class AnimalProductionUseService
    {
        private readonly IAnimalProductionUseRepository _repo;
        private readonly IMapper _mapper;

        public AnimalProductionUseService(IAnimalProductionUseRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        public async Task<IEnumerable<AnimalProductionUseReadDto>> GetAllAsync()
        {
            var animalProductionUses = await _repo.GetAllAsync();
            return _mapper.Map<IEnumerable<AnimalProductionUseReadDto>>(animalProductionUses);
        }

        public async Task<AnimalProductionUseReadDto?> GetByIdAsync(int id)
        {
            var animalProductionUse = await _repo.GetByIdAsync(id);
            return animalProductionUse == null ? null : _mapper.Map<AnimalProductionUseReadDto>(animalProductionUse);
        }
    }
}
