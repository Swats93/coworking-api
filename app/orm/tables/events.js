export default function loadTables(orm) {
  orm.defineTable({
    name: 'events',

    props: {
      autoId: true,
      timestamps: true
    },

  });
}  