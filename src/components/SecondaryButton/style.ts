import { StyleSheet } from "react-native";

import {
  Colors,
  BorderRadius,
  Shadows,
  Spacing,
  Fonts,
} from "../../theme";

export const styles = StyleSheet.create({

  button:{
  
    height:56,

    backgroundColor:Colors.white,

    borderWidth:1.5,

    borderColor:Colors.primary,

    borderRadius:BorderRadius.xl,

    justifyContent:"center",

    alignItems:"center",

    flexDirection:"row",

    ...Shadows.small,

  },
  fullWidth: {
    width: "100%",
  },
  
  disabled:{

    opacity:0.55,

  },
   content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  title:{

    color:Colors.primary,

    fontSize:Fonts.size.md,

    fontWeight:"700",

  },

  icon:{

    marginRight:Spacing.sm,

  }

});