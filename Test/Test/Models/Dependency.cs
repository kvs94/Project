using System;
using System.Collections.Generic;

namespace Test
{
    public partial class Dependency
    {
        public int ControlId { get; set; }
        public int DependencyControlId { get; set; }

        public Control Control { get; set; }
        public Control DependencyControl { get; set; }
    }
}
