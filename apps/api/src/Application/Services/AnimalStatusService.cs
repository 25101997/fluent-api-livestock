using Application.DTOs;
using AutoMapper;
using Domain.Entities;
using Domain.Interfaces;

namespace Application.Services
{
    public class AnimalStatusService
    {
        private readonly IAnimalStatusRepository _repo;
        private readonly IMapper _mapper;

        public AnimalStatusService(IAnimalStatusRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        public async Task<IEnumerable<AnimalStatusReadDto>> GetAllAsync()
        {
            var animalStatuses = await _repo.GetAllAsync();
            return _mapper.Map<IEnumerable<AnimalStatusReadDto>>(animalStatuses);
        }

        public async Task<AnimalStatusReadDto?> GetByIdAsync(int id)
        {
            var animalStatus = await _repo.GetByIdAsync(id);
            return animalStatus == null ? null : _mapper.Map<AnimalStatusReadDto>(animalStatus);
        }
    }
}
