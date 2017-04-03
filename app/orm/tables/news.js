export default function loadTables(orm) {

  orm.defineTable({
    name: 'news',

    props: {
      autoId: true,
      timestamps: true
    },    
  });
}
