export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

export const colorCode = (color) => {
  var i;
  for ( i = 0; i < COLORS.length; i++ ) {
    if (color == COLORS[i]){
      return i;
    }
  } 
}