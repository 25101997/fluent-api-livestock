using Application.DTOs;
using AutoMapper;
using Domain.Entities;
using Domain.Interfaces;

namespace Application.Services
{
    public class AnimalBreedService
    {
        private readonly IAnimalBreedRepository _repo;
        private readonly IMapper _mapper;

        public AnimalBreedService(IAnimalBreedRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        public async Task<IEnumerable<AnimalBreedReadDto>> GetAllAsync()
        {
            var animalBreeds = await _repo.GetAllAsync();
            return _mapper.Map<IEnumerable<AnimalBreedReadDto>>(animalBreeds);
        }

        public async Task<AnimalBreedReadDto?> GetByIdAsync(int id)
        {
            var animalBreed = await _repo.GetByIdAsync(id);
            return animalBreed == null ? null : _mapper.Map<AnimalBreedReadDto>(animalBreed);
        }
    }
}
