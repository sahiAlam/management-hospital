import { Box, Skeleton, Container } from "@mui/material";

const loading = () => {
  return (
    <Box component="section" py={12} bgcolor="#f9fdfd">
      <Container maxWidth="lg">
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: ".4rem",
            boxShadow: "0px 10px 30px 0px rgba(17, 38, 146, 0.05)",
            width: { xs: "100%" },
            maxWidth: "600px",
            margin: { xs: "auto", md: "0" },
            p: 2,
          }}
        >
          <Box my={2}>
            <Skeleton variant="text" width={200} height={40} />
          </Box>
          <Box>
            <Skeleton variant="text" width={300} height={30} />
            <Skeleton variant="text" width={200} height={30} />
            <Skeleton variant="text" width={300} height={30} />
            <Skeleton variant="text" width={200} height={30} />
            <Skeleton variant="text" width={200} height={30} />
          </Box>
          <Box my={2}>
            <Skeleton variant="rectangular" width="100%" height={50} />
          </Box>
          <Box my={2}>
            <Skeleton variant="rectangular" width="100%" height={50} />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: ".5rem",
              mt: "1rem",
            }}
          >
            <Skeleton variant="text" width={100} height={30} />
            <Skeleton variant="text" width={100} height={30} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default loading;
