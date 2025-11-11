using Domain.Entities;
using Domain.Interfaces;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories
{
    public class AnimalOriginRepository : IAnimalOriginRepository
    {
        private readonly AppDbContext _context;

        public AnimalOriginRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<AnimalOrigin>> GetAllAsync() =>
            await _context.AnimalOrigins
                .AsNoTracking()
                .ToListAsync();

        public async Task<AnimalOrigin?> GetByIdAsync(int id) =>
            await _context.AnimalOrigins
                .AsNoTracking()
                .FirstOrDefaultAsync(a => a.Id == id);
    }
}
