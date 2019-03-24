using System;
using System.Collections.Generic;

namespace Test
{
    public partial class Control
    {
        public Control()
        {
            DependencyControl = new HashSet<Dependency>();
            DependencyDependencyControl = new HashSet<Dependency>();
            InverseParentNavigation = new HashSet<Control>();
            Template = new HashSet<Template>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int Type { get; set; }
        public string Value { get; set; }
        public int? Parent { get; set; }

        public Control ParentNavigation { get; set; }
        public ICollection<Dependency> DependencyControl { get; set; }
        public ICollection<Dependency> DependencyDependencyControl { get; set; }
        public ICollection<Control> InverseParentNavigation { get; set; }
        public ICollection<Template> Template { get; set; }
    }
}
