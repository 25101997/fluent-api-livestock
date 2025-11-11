using Infrastructure.Data;
using Infrastructure.Repositories;
using Domain.Interfaces;
using Application.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddAutoMapper(typeof(Program));

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// PostgreSQL
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// Inyección de dependencias

// Animal
builder.Services.AddScoped<IAnimalRepository, AnimalRepository>();
builder.Services.AddScoped<AnimalService>();

// Animal Status
builder.Services.AddScoped<IAnimalStatusRepository, AnimalStatusRepository>();
builder.Services.AddScoped<AnimalStatusService>();

// Animal Stage
builder.Services.AddScoped<IAnimalStageRepository, AnimalStageRepository>();
builder.Services.AddScoped<AnimalStageService>();

// Animal Origin
builder.Services.AddScoped<IAnimalOriginRepository, AnimalOriginRepository>();
builder.Services.AddScoped<AnimalOriginService>();

// Animal Reproductive Record
builder.Services.AddScoped<IAnimalReproductiveRecordRepository, AnimalReproductiveRecordRepository>();
builder.Services.AddScoped<AnimalReproductiveRecordService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapControllers();
app.UseHttpsRedirection();
app.Run();
