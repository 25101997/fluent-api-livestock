namespace Domain.Entities
{
    public class Animal
    {
        public int Id { get; set; }

        // Llaves foráneas
        public int OriginId { get; set; }
        public int StatusId { get; set; }
        public int StageId { get; set; }

        // Atributos descriptivos
        public string Sex { get; set; } = string.Empty;
        public string Breed { get; set; } = string.Empty;

        // Fechas
        public DateTime BirthDate { get; set; }
        public DateTime Created { get; set; } = DateTime.UtcNow;
        public DateTime Updated { get; set; } = DateTime.UtcNow;

        // Relaciones de navegación
        public AnimalOrigin? Origin { get; set; }
        public AnimalStatus? Status { get; set; }
        public AnimalStage? Stage { get; set; }

    }

    public class AnimalOrigin
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
    }

    public class AnimalStatus
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
    }

    public class AnimalStage
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;

        //public ICollection<Animal>? Animals { get; set; }
    }
}
