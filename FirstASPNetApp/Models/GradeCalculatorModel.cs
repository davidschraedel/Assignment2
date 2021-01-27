using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace FirstASPNetApp.Models
{
    public class GradeCalculatorModel
    {
        private const double MIN = 0.0;

        [Required]
        [Range(minimum: MIN, maximum: 10.0)]
        public double Assignments { get; set; }
        [Required]
        [Range(minimum: MIN, maximum: 10.0)]
        public double GroupProject { get; set; }
        [Required]
        [Range(minimum: MIN, maximum: 10.0)]
        public double Quizzes { get; set; }
        [Required]
        [Range(minimum: MIN, maximum: 20.0)]
        public double Exams { get; set; }
        [Required]
        [Range(minimum: MIN, maximum: 10.0)]
        public double Intex { get; set; }
    }
}
