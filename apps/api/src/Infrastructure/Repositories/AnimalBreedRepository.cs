using Domain.Entities;
using Domain.Interfaces;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories
{
    public class AnimalBreedRepository : IAnimalBreedRepository
    {
        private readonly AppDbContext _context;

        public AnimalBreedRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<AnimalBreed>> GetAllAsync() =>
            await _context.AnimalBreeds
                .AsNoTracking()
                .ToListAsync();

        public async Task<AnimalBreed?> GetByIdAsync(int id) =>
            await _context.AnimalBreeds
                .AsNoTracking()
                .FirstOrDefaultAsync(a => a.Id == id);
    }
}
