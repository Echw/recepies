"use client";

import { Box, Typography } from "@mui/material";
import React from "react";

export const RecipeStepDetails = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: "5rem 10rem",
        gap: 4,
      }}
    >
      <Typography variant="h4" color="text.primary">
        Preparation
      </Typography>
      <Box>
        <Typography variant="h6" color="text.secondary">
          STEP I
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          risus metus, sollicitudin sed eros sed, volutpat viverra tortor. Ut
          auctor mauris at elit rhoncus malesuada. Duis vehicula leo id nisl
          aliquet volutpat. Nam pellentesque eros id metus mattis, quis
          ultricies diam convallis. Quisque orci mauris, sagittis sit amet
          venenatis ac, venenatis id ex. Ut ornare nunc nibh, eu convallis justo
          blandit vitae. Pellentesque sem libero, molestie id turpis vel,
          molestie consequat turpis. Nullam blandit eu nibh imperdiet sagittis.
          Vestibulum fermentum libero et dignissim egestas. Maecenas dignissim
          sollicitudin mauris eu imperdiet. Fusce nec egestas felis. Donec vel
          elit id nunc porta rutrum. Suspendisse at diam tortor. Donec dapibus
          tempor pulvinar. Phasellus eu sollicitudin magna, at mollis eros. Sed
          nulla metus, cursus ac libero nec, dignissim porttitor magna.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" color="text.secondary">
          STEP II
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Proin sed interdum lectus. Pellentesque eget commodo odio. Vestibulum
          velit metus, efficitur at sodales quis, tincidunt in mauris. Integer
          dapibus egestas mi a condimentum. Mauris in nulla quis erat semper
          fermentum. In et urna non urna pretium dictum sed vel ex. Aenean non
          velit ut lectus pulvinar ullamcorper sed volutpat libero. Nunc
          facilisis erat arcu, nec ullamcorper magna porttitor quis. Vivamus
          maximus rutrum metus, non consequat est. Duis ultrices ante non elit
          dignissim, at malesuada eros egestas. Nullam maximus vulputate ornare.
          Pellentesque pellentesque sed erat in venenatis. Nulla at mattis
          neque, ut auctor dui.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" color="text.secondary">
          STEP III
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Integer hendrerit mauris id turpis consequat molestie. Mauris dui
          massa, blandit eu neque sed, porta congue risus. Aenean vitae tortor
          sapien. Nulla sed mauris consectetur, vestibulum est non, volutpat
          purus. Sed euismod lorem id nisl vehicula egestas. Donec rutrum augue
          et nulla pharetra pharetra. Nunc mi turpis, varius eu lacus quis,
          dignissim suscipit erat. Sed faucibus erat vitae placerat tempor. Nam
          vitae ante ligula. Mauris a tortor cursus, vehicula quam sit amet,
          maximus leo. Fusce eget tempor tellus, a commodo orci.
        </Typography>
      </Box>
    </Box>
  );
};
