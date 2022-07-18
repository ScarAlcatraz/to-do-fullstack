
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return knex('todos').truncate()
    .then(function () {
      // Inserts existing entries
      return knex('todos').insert([
        {
          message: "Walk the dog.",
        },
        {
          message: "Update phone.",
        },
        {
          message: "Wash clothes.",
        },
        {
          message: "Call Megh.",
        },
      ]);
    })
};
