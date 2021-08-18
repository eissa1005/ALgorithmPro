
using System.Collections.Generic;

namespace ALgorithmPro
{
    public class Column
    {
        public string id { get; set; }
        public bool visible { get; set; }
        public long width { get; set; }
        public int sort { get; set; }
    }

    public class Preference
    {
        public List<Column> columns { get; set; }
        public bool includeDeleted { get; set; }
        public List<object> filterItems { get; set; }
    }
}
