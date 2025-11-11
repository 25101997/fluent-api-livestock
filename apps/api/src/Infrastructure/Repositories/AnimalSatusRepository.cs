using Domain.Entities;
using Domain.Interfaces;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories
{
    public class AnimalStatusRepository : IAnimalStatusRepository
    {
        private readonly AppDbContext _context;

        public AnimalStatusRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<AnimalStatus>> GetAllAsync() =>
            await _context.AnimalStatuses
                .AsNoTracking()
                .ToListAsync();

        public async Task<AnimalStatus?> GetByIdAsync(int id) =>
            await _context.AnimalStatuses
                .AsNoTracking()
                .FirstOrDefaultAsync(a => a.Id == id);
    }
}
