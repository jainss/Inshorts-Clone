import { Box, Typography, styled } from "@mui/material";

const Container=styled(Box)`
   background: #f44336;
   color: #ffffff;
   display:flex;
   align-items:center;
   height:48px;
`;

const Image = styled('img')({
    height:34,
    '&:last-child': {
        margin: '0 50px 0 20px'
    }
});

const Text= styled(Typography)`
   font-size: 14px;
   font-weight:500px;
   margin-left: 50px;
   font-family: 'Roboto',sans-serif;
`;

const InfoHeader = () => {
  const appleStore =
    "https://assets.inshorts.com/website_assets/images/appstore.png";
  const googleStore =
    "https://assets.inshorts.com/website_assets/images/playstore.png";

  return (
    <Container>
      <Text>
        For the best experience use inshorts app on your smartphone
      </Text>
      <Box style={{diplay:'flex', marginLeft:'auto'}}>
        <Image src={appleStore} alt="AppleStore Logo" />
        <Image src={googleStore} alt="GoogleStore Logo" />
      </Box>
    </Container>
  );
};

export default InfoHeader;
