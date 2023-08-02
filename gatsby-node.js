exports.createPages = async({actions,graphql,reporter}) => {
  //Create pages for residential services
  const result = await graphql(`
    {
      allContentfulPage(filter: {internalName: {regex: "/(Residential Garage)/"}}){
        nodes{
          slug 
          internalName
        }
      }
    }
  `);
  if (result.errors){
    reporter.panic('Error loading events', JSON.stringify(result.errors));
  }
  result.data.allContentfulPage.nodes.forEach(service => {
    const {slug, internalName} = service;

    let templateComponent;
      if(internalName === 'Residential Garage Opener Services'){
        templateComponent = require.resolve('./src/templates/residential-openers-template.js');
      }else if(internalName === 'Residential Garage Door Installation'){
        templateComponent = require.resolve('./src/templates/residential-installation-template.js');
      }else if(internalName === 'Residential Garage Door Repair'){
        templateComponent = require.resolve('./src/templates/residential-repair-template.js');
      }else if(internalName === 'Residential Garage Door Spring Repair'){
        templateComponent = require.resolve('./src/templates/residential-spring-replacement-template.js');
      }else{
        templateComponent = null;
      }
    actions.createPage({
      path: `/residential/${service.slug}`,
      component: templateComponent,
      context: {
        slug: service.slug,
      }
    });
  });
};
