namespace Application.DTOs
{
    public class AnimalReadDto
    {
        public int Id { get; set; }
        public string Origin { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
        public string Stage { get; set; } = string.Empty;
        public string Breed { get; set; } = string.Empty;
        public string Sex { get; set; } = string.Empty;
        public DateTime BirthDate { get; set; }
        public DateTime Created { get; set; }
        public DateTime Updated { get; set; }
    }
}
