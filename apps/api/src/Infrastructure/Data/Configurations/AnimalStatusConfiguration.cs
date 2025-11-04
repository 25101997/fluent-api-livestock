using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Configurations
{
    public class AnimalStatusConfiguration : IEntityTypeConfiguration<AnimalStatus>
    {
        public void Configure(EntityTypeBuilder<AnimalStatus> builder)
        {
            builder.ToTable("animal_status");
            builder.HasKey(s => s.Id);
            builder.Property(s => s.Id).HasColumnName("id");
            builder.Property(s => s.Name)
                   .HasColumnName("name")
                   .HasMaxLength(50)
                   .IsRequired();
        }
    }
}
