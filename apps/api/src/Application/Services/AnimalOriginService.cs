using Application.DTOs;
using AutoMapper;
using Domain.Entities;
using Domain.Interfaces;

namespace Application.Services
{
    public class AnimalOriginService
    {
        private readonly IAnimalOriginRepository _repo;
        private readonly IMapper _mapper;

        public AnimalOriginService(IAnimalOriginRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        public async Task<IEnumerable<AnimalOriginReadDto>> GetAllAsync()
        {
            var animalOrigins = await _repo.GetAllAsync();
            return _mapper.Map<IEnumerable<AnimalOriginReadDto>>(animalOrigins);
        }

        public async Task<AnimalOriginReadDto?> GetByIdAsync(int id)
        {
            var animalOrigin = await _repo.GetByIdAsync(id);
            return animalOrigin == null ? null : _mapper.Map<AnimalOriginReadDto>(animalOrigin);
        }
    }
}
