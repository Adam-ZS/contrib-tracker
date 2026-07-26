// stats.js — dashboard contribution stats
// Updated by the updater cron script

var stats = {
  total: 118,
  thisMonth: 89,
  streak: 7,
  repos: 8,
  languages: {
    JavaScript: 55,
    Python: 30,
    Shell: 10,
    CSS: 5
  }
};

function updateStats() {
  stats.total += 1;
  stats.thisMonth = stats.total;
  return stats;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { stats, updateStats };
}