import { Box, Card, Flex, Group, Image, SimpleGrid, Stack, Text } from '@mantine/core';

function Dashboard() {
  return (

    <Box>
      <Stack align='center' justify='center' h={"100vh"}>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }}
          spacing={{ base: 10, sm: 'xl' }}
          verticalSpacing={{ base: 'md', sm: 'xl' }}>
          <Box pl={100}>
            <Card p={30} bg={"maroon"}>
            <Flex direction={"row"} justify={"center"} gap={"lg"} align={"center"}>
                <Image src={"https://instiki.ac.id/wp-content/uploads/2022/12/Profesi_1.jpg"} alt='' w={150} radius={"100"} />
                <Group>
                  <Text fw={"bold"} fz={25} c={"white"}>ANIMATOR</Text>
                  <Text c={"white"}>Mau jadi Animator? Bikin animasi keren? Kuliah DKV di INSTIKI dapat mengawali langkahmu!</Text>
                </Group>
              </Flex>
            </Card>
          </Box>
          <Box pr={100}>
            <Card p={30} bg={"maroon"}>
              <Flex direction={"row"} justify={"center"} gap={"lg"} align={"center"}>
                <Image src={"https://instiki.ac.id/wp-content/uploads/2022/12/Profesi_1.jpg"} alt='' w={150} radius={"100"} />
                <Group>
                  <Text fw={"bold"} fz={25} c={"white"}>ANIMATOR</Text>
                  <Text c={"white"}>Mau jadi Animator? Bikin animasi keren? Kuliah DKV di INSTIKI dapat mengawali langkahmu!</Text>
                </Group>
              </Flex>
            </Card>
          </Box>
        </SimpleGrid>

      </Stack>

    </Box>
  );
}

export default Dashboard;
