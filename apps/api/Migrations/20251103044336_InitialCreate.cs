using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AnimalOrigin",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AnimalOrigin", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AnimalStage",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AnimalStage", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AnimalStatus",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AnimalStatus", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "animal",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    origin_id = table.Column<int>(type: "integer", nullable: false),
                    status_id = table.Column<int>(type: "integer", nullable: false),
                    stage_id = table.Column<int>(type: "integer", nullable: false),
                    sex = table.Column<string>(type: "character varying(10)", maxLength: 10, nullable: false),
                    breed = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    birth_date = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    created = table.Column<DateTime>(type: "timestamp with time zone", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP"),
                    updated = table.Column<DateTime>(type: "timestamp with time zone", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_animal", x => x.id);
                    table.ForeignKey(
                        name: "FK_animal_AnimalOrigin_origin_id",
                        column: x => x.origin_id,
                        principalTable: "AnimalOrigin",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_animal_AnimalStage_stage_id",
                        column: x => x.stage_id,
                        principalTable: "AnimalStage",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_animal_AnimalStatus_status_id",
                        column: x => x.status_id,
                        principalTable: "AnimalStatus",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_animal_origin_id",
                table: "animal",
                column: "origin_id");

            migrationBuilder.CreateIndex(
                name: "IX_animal_stage_id",
                table: "animal",
                column: "stage_id");

            migrationBuilder.CreateIndex(
                name: "IX_animal_status_id",
                table: "animal",
                column: "status_id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "animal");

            migrationBuilder.DropTable(
                name: "AnimalOrigin");

            migrationBuilder.DropTable(
                name: "AnimalStage");

            migrationBuilder.DropTable(
                name: "AnimalStatus");
        }
    }
}
