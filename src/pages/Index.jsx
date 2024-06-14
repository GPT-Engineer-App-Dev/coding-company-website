import { Container, Text, VStack, Box, Heading, Button, Flex, Image } from "@chakra-ui/react";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" py={10} px={6}>
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Our Coding Services
          </Heading>
          <Text fontSize="xl" color="gray.500">
            We provide top-notch coding solutions to help your business thrive in the digital world.
          </Text>
          <Button mt={8} colorScheme="teal" size="lg">
            Get Started
          </Button>
        </Box>

        <Flex direction={{ base: "column", md: "row" }} justify="space-around" align="center" py={10}>
          <Box textAlign="center" maxW="sm" p={5} borderWidth="1px" borderRadius="lg">
            <FaCode size="3em" />
            <Heading as="h3" size="lg" mt={4} mb={2}>
              Custom Development
            </Heading>
            <Text color="gray.500">
              Tailored software solutions to meet your unique business needs.
            </Text>
          </Box>

          <Box textAlign="center" maxW="sm" p={5} borderWidth="1px" borderRadius="lg">
            <FaLaptopCode size="3em" />
            <Heading as="h3" size="lg" mt={4} mb={2}>
              Web Design
            </Heading>
            <Text color="gray.500">
              Beautiful and responsive web designs to engage your audience.
            </Text>
          </Box>

          <Box textAlign="center" maxW="sm" p={5} borderWidth="1px" borderRadius="lg">
            <FaRocket size="3em" />
            <Heading as="h3" size="lg" mt={4} mb={2}>
              SEO Optimization
            </Heading>
            <Text color="gray.500">
              Improve your website's visibility and ranking on search engines.
            </Text>
          </Box>
        </Flex>

        <Box textAlign="center" py={10} px={6}>
          <Heading as="h2" size="xl" mb={4}>
            Why Choose Us?
          </Heading>
          <Text fontSize="lg" color="gray.500" mb={4}>
            Our team of experienced developers is dedicated to delivering high-quality solutions that drive results.
          </Text>
          <Image src="https://via.placeholder.com/800x400" alt="Our Team" borderRadius="lg" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;