using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Test
{
    public partial class ApplicationContext : DbContext
    {
        public ApplicationContext()
        {
        }

        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

        public virtual DbSet<Control> Control { get; set; }
        public virtual DbSet<Dependency> Dependency { get; set; }
        public virtual DbSet<Template> Template { get; set; }
        public virtual DbSet<User> User { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Control>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.Property(e => e.Value).HasMaxLength(50);

                entity.HasOne(d => d.ParentNavigation)
                    .WithMany(p => p.InverseParentNavigation)
                    .HasForeignKey(d => d.Parent)
                    .HasConstraintName("FK_Control_Control");
            });

            modelBuilder.Entity<Dependency>(entity =>
            {
                entity.HasKey(e => new { e.ControlId, e.DependencyControlId });

                entity.HasOne(d => d.Control)
                    .WithMany(p => p.DependencyControl)
                    .HasForeignKey(d => d.ControlId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Dependency_Control");

                entity.HasOne(d => d.DependencyControl)
                    .WithMany(p => p.DependencyDependencyControl)
                    .HasForeignKey(d => d.DependencyControlId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Dependency_Control1");
            });

            modelBuilder.Entity<Template>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.HasOne(d => d.ContainerNavigation)
                    .WithMany(p => p.Template)
                    .HasForeignKey(d => d.Container)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Template_Control");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.LogonName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Role).HasMaxLength(50);
            });
        }
    }
}
