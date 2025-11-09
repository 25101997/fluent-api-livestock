using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Configurations
{
    public class AnimalReproductiveRecordConfiguration : IEntityTypeConfiguration<AnimalReproductiveRecord>
    {
        public void Configure(EntityTypeBuilder<AnimalReproductiveRecord> builder)
        {
            builder.ToTable("animal_reproductive_record");

            builder.HasKey(r => r.Id);
            builder.Property(r => r.Id).HasColumnName("id");

            builder.Property(r => r.MotherId).HasColumnName("mother_id").IsRequired();
            builder.Property(r => r.FatherId).HasColumnName("father_id").IsRequired();

            builder.Property(r => r.Status)
                .HasColumnName("status")
                .HasMaxLength(12)
                .IsRequired();

            builder.Property(r => r.BornMale).HasColumnName("born_male");
            builder.Property(r => r.BornFemale).HasColumnName("born_female");
            builder.Property(r => r.AbortedMale).HasColumnName("aborted_male");
            builder.Property(r => r.AbortedFemale).HasColumnName("aborted_female");
            builder.Property(r => r.Notes).HasColumnName("notes");

            builder.Property(r => r.Created)
                .HasColumnName("created")
                .HasDefaultValueSql("CURRENT_TIMESTAMP");

            builder.Property(r => r.Updated)
                .HasColumnName("updated")
                .HasDefaultValueSql("CURRENT_TIMESTAMP");

            // 🔹 Relaciones
            builder.HasOne(r => r.Mother)
                .WithMany()
                .HasForeignKey(r => r.MotherId)
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("fk_mother");

            builder.HasOne(r => r.Father)
                .WithMany()
                .HasForeignKey(r => r.FatherId)
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("fk_father");
        }
    }
}
