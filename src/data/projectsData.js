/* ==========================================
   PROJECTS DATA
   
   EASY EDITING:
   Just add your project folder name and list the image files!
   The code will automatically build the correct paths.
   
   TEMPLATE:
   {
     folderName: "Your Project Folder Name",
     title: "Display Title",
     description: "Brief description of the project",
     images: ["image1.jpg", "image2.png", "image3.jpg"]
   }
   ========================================== */

export const projects = [
  {
    folderName: "First Project",
    title: "First Project",
    date: "12/10/2025",
    description: "A showcase of completed work and professional results",
    images: [
      "593973753_25133552482982249_3964365415880756502_n.png",
      "594464491_1394961295316386_5558038373201171304_n.png",
      "597221202_817497831279060_404033717961938154_n.png",
      "597222583_653508784413896_3683320496637417875_n.png",
      "597282610_2624563467928258_4399858965608121170_n.png",
      "597504141_853221554227396_6733402683453339891_n.png",
      "597635260_1440152780811562_3173910801407148687_n.png",
      "597890113_4402350883342323_856268783536527701_n.png",
      "597916793_1225346389471907_2682679770978355232_n.png",
      "598682916_1779598806075882_1052688069975330167_n.png",
      "598715513_2062581121162059_4429244773909497508_n.png",
      "598840239_1664454007856695_8024237933454306457_n.png"
    ]
  }

  /* 
  // TO ADD A NEW PROJECT:
  // 1. Create a folder in /public/images/ (e.g., "Kitchen Remodel")
  // 2. Add your images to that folder
  // 3. Copy and paste this template below:
  
  ,{
    folderName: "Kitchen Remodel",
    title: "Kitchen Remodel",
    description: "Complete kitchen renovation project",
    images: [
      "before.jpg",
      "during.jpg", 
      "after.jpg"
    ]
  }
  
  */
];

// Helper function to build full image paths
export function getProjectWithPaths(project) {
  return {
    ...project,
    images: project.images.map(img => `/images/${project.folderName}/${img}`)
  };
}
