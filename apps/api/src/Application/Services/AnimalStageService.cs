using Application.DTOs;
using AutoMapper;
using Domain.Entities;
using Domain.Interfaces;

namespace Application.Services
{
    public class AnimalStageService
    {
        private readonly IAnimalStageRepository _repo;
        private readonly IMapper _mapper;

        public AnimalStageService(IAnimalStageRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        public async Task<IEnumerable<AnimalStageReadDto>> GetAllAsync()
        {
            var animalStages = await _repo.GetAllAsync();
            return _mapper.Map<IEnumerable<AnimalStageReadDto>>(animalStages);
        }

        public async Task<AnimalStageReadDto?> GetByIdAsync(int id)
        {
            var animalStage = await _repo.GetByIdAsync(id);
            return animalStage == null ? null : _mapper.Map<AnimalStageReadDto>(animalStage);
        }
    }
}
