export default function loadTables(orm) {

  orm.defineTable({
    name: 'locations',

    props: {
      autoId: true,
      timestamps: true
    },    
  });
}
