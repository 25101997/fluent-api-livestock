using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Configurations
{
    public class AnimalStageConfiguration : IEntityTypeConfiguration<AnimalStage>
    {
        public void Configure(EntityTypeBuilder<AnimalStage> builder)
        {
            builder.ToTable("animal_stage");
            builder.HasKey(s => s.Id);
            builder.Property(s => s.Id).HasColumnName("id");
            builder.Property(s => s.Name)
                   .HasColumnName("name")
                   .HasMaxLength(50)
                   .IsRequired();
        }
    }
}
