/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Carousel, CarouselSlide } from '@mantine/carousel';
import { ActionIcon, Anchor, BackgroundImage, Box, Burger, Button, Card, Collapse, Flex, Group, Image, SimpleGrid, Stack, Text, TextInput } from '@mantine/core';
import { useHover, useWindowScroll } from '@mantine/hooks';
import Autoplay from 'embla-carousel-autoplay';
import _ from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { FaArrowUp, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaInstagram, FaMagnifyingGlass, FaSquareFacebook } from "react-icons/fa6";
import { FiPhone } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { MdMailOutline } from 'react-icons/md';

const sections = [
  { name: "Kehidupan Kampus" },
  { name: "Riset & Inovasi" },
  { name: "Tentang Kami" },
  { name: "Jurusan" },
  { name: "Virtual Tour" },
  { name: "Daftar Sekarang" }
];

const imagemenu1 = [
  {
    id: 1,
    image: "https://instiki.ac.id/wp-content/uploads/elementor/thumbs/analytics-piw7f15ony97dzm3lyk0mhe8w40a6di3w0aap59a7c.png",
    kalimat: "TI - Manajemen Data & Informasi",
    kalimat2: "Fakultas Teknologi dan Informatika (S.Kom)"
  },
  {
    id: 2,
    image: "https://instiki.ac.id/wp-content/uploads/elementor/thumbs/travel-map-piw7f31d1mbs17jdazd9rgx62vr0lrpkk9l9np6huw.png",
    kalimat: "TI - Pariwisata ",
    kalimat2: "Fakultas Teknologi dan Informatika (S.Kom)"
  },
  {
    id: 3,
    image: "https://instiki.ac.id/wp-content/uploads/elementor/thumbs/accounting-piw7f15ony97dzm3lyk0mhe8w40a6di3w0aap59a7c.png",
    kalimat: "TI - Komputer Akuntansi dan Bisnis ",
    kalimat2: "Fakultas Teknologi dan Informatika (S.Kom)"
  },
  {
    id: 4,
    image: "https://instiki.ac.id/wp-content/uploads/2022/01/website.png",
    kalimat: "Sistem Komputer (S.Kom)",
  },
  {
    id: 5,
    image: "https://instiki.ac.id/wp-content/uploads/elementor/thumbs/Icon-DKV-01-pks8yliyy6wqhk2bishlwo152yfpl25a04uaoult60.png",
    kalimat: "Desain Komunikasi Visual",
    kalimat2: "Fakultas Bisnis dan Desain Kreatif (S.Ds)"
  },
  {
    id: 6,
    image: "https://instiki.ac.id/wp-content/uploads/elementor/thumbs/Icon-Business-Digital-01-pks8yyoplver03j7dy6dvkplecmuktlipxz3eq2aqw.png",
    kalimat: "Bisnis Digital",
    kalimat2: "Fakultas Bisnis dan Desain Kreatif (S.Bns)"
  }

];

interface GridItemProps {
  image: string;
  kalimat: string;
  kalimat2?: string;
}
function GridItem({ image, kalimat, kalimat2 = '' }: GridItemProps) {
  return (
    <Box p={20}>
      <Flex direction={"row"} gap={"lg"}>
        <Image src={image} alt='' w={50} />
        <Group>
          <Flex direction={"column"}>
            <Text>{kalimat}</Text>
            <Text>{kalimat2}</Text>
          </Flex>
        </Group>
      </Flex>
    </Box>
  );
}

function MenuBox({ dir }: { dir: "row" | "column" }) {
  return <Flex direction={dir} gap={"md"} wrap={"wrap"} justify={"center"} align={"start"} w={"100%"}>
    {sections.map((v, k) => <MenuItem key={k} name={v.name} />)}
  </Flex>
}

function MenuItem({ name }: { name: string }) {
  const { hovered, ref } = useHover();
  return <Text ref={ref as any} component={Link} href={"/"} size='lg' c={hovered ? "maroon" : "dark"} style={{
    fontWeight: "bold",
    textWrap: "nowrap"
  }}>{_.upperCase(name)}</Text>
}

// header page
function HeaderPage({ open, setOpen }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) {
  return <Flex align={"center"} gap={"md"} w={"100%"} p={"sm"} pos={"sticky"} top={0} bg={"white"} style={{
    zIndex: 99
  }}>
    <Image w={200} src={"https://instiki.ac.id/wp-content/uploads/2022/01/Layer_2.svg"} alt='' />
    <Flex flex={1}  >
      <Box visibleFrom='md'>
        <MenuBox dir={"row"} />
      </Box>
    </Flex>
    <Burger hiddenFrom='md' opened={open} onClick={() => setOpen((val) => (!val))} />
    <Image w={24} src={"https://instiki.ac.id/wp-content/plugins/gtranslate/flags/svg/en.svg"} alt='' />
    <Image w={24} src={"https://instiki.ac.id/wp-content/plugins/gtranslate/flags/svg/id.svg"} alt='' />
  </Flex>
}


function LayoutBackground() {
  const [open, setOpen] = useState(false)
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scroll, scrollTo] = useWindowScroll();
  const { hovered, ref } = useHover();

  return (
    <Box>
      <Stack gap={0}>
        <HeaderPage open={open} setOpen={setOpen} />
        {/* body top */}
        <Stack p={"md"}>
          <Box pos={"relative"} w={"100%"} hiddenFrom='md'>
            <Collapse in={open} pos={"absolute"} w={"100%"}>
              <Stack p={"md"} bg={"white"} h={400} >
                <MenuBox dir={"column"} />
              </Stack>
            </Collapse>
          </Box>
          <Carousel
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
          >
            <CarouselSlide>
              <BackgroundImage src='https://instiki.ac.id/wp-content/uploads/2024/10/DSC09203-scaled.jpg' h={700}>
                <Stack pl={170} justify='center' h={"60vh"}>
                  <Text c={"white"} fw={"bolder"} fz={"60"}>Mimpi Besarmu Ada di Sini</Text>
                  <Text c={"white"} fw={"inherit"} fz={"h2"} >Telusuri lebih dalam INSTIKI</Text>
                  <Flex direction={"column"}>
                    <TextInput radius={0} rightSection={<ActionIcon radius={0} size={"lg"} bg={"maroon"}><FaMagnifyingGlass /></ActionIcon>} w={800} placeholder='Cari...' />
                    <Box>
                      <SimpleGrid bg={"white"} w={800}
                        cols={{ base: 1, sm: 2, lg: 4 }}

                      >

                        <Box >
                          <Button ref={ref as any} bg={hovered ? "maroon" : "white"} ta={"center"} fullWidth style={{ borderRight: "1px solid black" }} radius={0}>
                            <Text ta={"center"}>DAFTAR SEKARANG</Text>
                          </Button>
                        </Box>
                        <Box>
                          <Button ref={ref as any} bg={hovered ? "maroon" : "white"} ta={"center"} fullWidth style={{ borderRight: "1px solid black" }} radius={0}>
                            <Text ta={"center"}>PROGRAM KAMI</Text>
                          </Button>
                        </Box>
                        <Box>
                          <Button ref={ref as any} bg={hovered ? "maroon" : "white"} ta={"center"} fullWidth style={{ borderRight: "1px solid black" }} radius={0}>
                            <Text ta={"center"}>KEGIATAN</Text>
                          </Button>
                        </Box>
                        <Box>
                          <Button ref={ref as any} bg={hovered ? "maroon" : "white"} ta={"center"} fullWidth style={{ borderRight: "1px solid black" }} radius={0}>
                            <Text ta={"center"}>AKADEMIK</Text>
                          </Button>
                        </Box>

                      </SimpleGrid>
                    </Box>
                  </Flex>
                </Stack>
              </BackgroundImage></CarouselSlide>
            <CarouselSlide>
              <BackgroundImage src='https://instiki.ac.id/wp-content/uploads/2024/10/DSC09597-1536x1024.jpg' h={700}>
                <Stack pl={170} justify='center' h={"60vh"}>
                  <Text c={"white"} fw={"bolder"} fz={"60"}>Mimpi Besarmu Ada di Sini</Text>
                  <Text c={"white"} fw={"inherit"} fz={"h2"} >Telusuri lebih dalam INSTIKI</Text>
                  <Flex direction={"column"}>
                    <TextInput radius={0} rightSection={<ActionIcon size={"lg"} radius={0} bg={"maroon"}><FaMagnifyingGlass /></ActionIcon>} w={800} placeholder='Cari...' />
                  </Flex>
                </Stack>
              </BackgroundImage></CarouselSlide>
          </Carousel>
          <Flex h={"30vh"} align={"center"} pt={80} direction={"column"}>
            <Text style={{ letterSpacing: "0.15em" }} fs={"inherit"} fz={"h2"}>APA SAJA KESEMPATAN JENJANG</Text>
            <Text fs={"inherit"} fw={"bolder"} fz={"45"}>KARIRMU DI MASA DEPAN?</Text>
          </Flex>
          <Box>
            <Carousel
              withIndicators
              height={200}
              slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
              slideGap={{ base: 0, sm: 'sm' }}
              loop
              align="center"

            >
              <CarouselSlide >
                <Box bg={"blue"}>
                  <Card p={30} bg={"maroon"} w={"500"} pos={"sticky"}>
                    <Flex direction={"row"} justify={"center"} gap={"lg"} align={"center"}>
                      <Image src={"https://instiki.ac.id/wp-content/uploads/2022/12/Profesi_1.jpg"} alt='' w={150} radius={"100"} />
                      <Group>
                        <Text fw={"bold"} fz={25} c={"white"}>ANIMATOR</Text>
                        <Text c={"white"}>Mau jadi Animator? Bikin animasi keren? Kuliah DKV di INSTIKI dapat mengawali langkahmu!</Text>
                      </Group>
                    </Flex>
                  </Card>
                </Box>
              </CarouselSlide>
              <CarouselSlide>
                <Box bg={"cyan"}>
                  <Card p={30} bg={"maroon"} w={"500"} pos={"sticky"}>
                    <Flex direction={"row"} justify={"center"} gap={"lg"} align={"center"}>
                      <Image src={"https://instiki.ac.id/wp-content/uploads/2022/12/Profesi_1.jpg"} alt='' w={150} radius={"100"} />
                      <Group>
                        <Text fw={"bold"} fz={25} c={"white"}>ANIMATOR</Text>
                        <Text c={"white"}>Mau jadi Animator? Bikin animasi keren? Kuliah DKV di INSTIKI dapat mengawali langkahmu!</Text>
                      </Group>
                    </Flex>
                  </Card>
                </Box>
              </CarouselSlide>
              <CarouselSlide >
                <Box bg={"blue"}>
                  <Card p={30} bg={"maroon"} w={"500"} pos={"sticky"}>
                    <Flex direction={"row"} justify={"center"} gap={"lg"} align={"center"}>
                      <Image src={"https://instiki.ac.id/wp-content/uploads/2022/12/Profesi_1.jpg"} alt='' w={150} radius={"100"} />
                      <Group>
                        <Text fw={"bold"} fz={25} c={"white"}>ANIMATOR</Text>
                        <Text c={"white"}>Mau jadi Animator? Bikin animasi keren? Kuliah DKV di INSTIKI dapat mengawali langkahmu!</Text>
                      </Group>
                    </Flex>
                  </Card>
                </Box>
              </CarouselSlide>
              <CarouselSlide >
                <Box bg={"blue"}>
                  <Card p={30} bg={"maroon"} w={"500"} pos={"sticky"}>
                    <Flex direction={"row"} justify={"center"} gap={"lg"} align={"center"}>
                      <Image src={"https://instiki.ac.id/wp-content/uploads/2022/12/Profesi_1.jpg"} alt='' w={150} radius={"100"} />
                      <Group>
                        <Text fw={"bold"} fz={25} c={"white"}>ANIMATOR</Text>
                        <Text c={"white"}>Mau jadi Animator? Bikin animasi keren? Kuliah DKV di INSTIKI dapat mengawali langkahmu!</Text>
                      </Group>
                    </Flex>
                  </Card>
                </Box>
              </CarouselSlide>
              <CarouselSlide >
                <Box bg={"blue"}>
                  <Card p={30} bg={"maroon"} w={"500"} pos={"sticky"}>
                    <Flex direction={"row"} justify={"center"} gap={"lg"} align={"center"}>
                      <Image src={"https://instiki.ac.id/wp-content/uploads/2022/12/Profesi_1.jpg"} alt='' w={150} radius={"100"} />
                      <Group>
                        <Text fw={"bold"} fz={25} c={"white"}>ANIMATOR</Text>
                        <Text c={"white"}>Mau jadi Animator? Bikin animasi keren? Kuliah DKV di INSTIKI dapat mengawali langkahmu!</Text>
                      </Group>
                    </Flex>
                  </Card>
                </Box>
              </CarouselSlide>
              <CarouselSlide >
                <Box bg={"blue"}>
                  <Card p={30} bg={"maroon"} w={"500"} pos={"sticky"}>
                    <Flex direction={"row"} justify={"center"} gap={"lg"} align={"center"}>
                      <Image src={"https://instiki.ac.id/wp-content/uploads/2022/12/Profesi_1.jpg"} alt='' w={150} radius={"100"} />
                      <Group>
                        <Text fw={"bold"} fz={25} c={"white"}>ANIMATOR</Text>
                        <Text c={"white"}>Mau jadi Animator? Bikin animasi keren? Kuliah DKV di INSTIKI dapat mengawali langkahmu!</Text>
                      </Group>
                    </Flex>
                  </Card>
                </Box>
              </CarouselSlide>
            </Carousel>
          </Box>
          <Box pt={50}>
            <Text ta={"center"} fw={"bold"} fz={"35"}> Jurusan Pilihan Untuk Masa Depan</Text>
          </Box>
          <Box pt={20} pl={100} pb={20}>
            <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }}>
              {imagemenu1.map((item, index) => (
                <GridItem key={index} image={item.image} kalimat={item.kalimat} kalimat2={item.kalimat2} />
              ))}
            </SimpleGrid>
          </Box>
          <Box p={50} bg={"maroon"}>
            <Flex direction={"column"} align={"center"}>
              <Text c={"white"} fw={"bold"} fz={"h3"} ta={"center"}>Dapatkan beasiswa jalur prestasi di INSTIKI dengan potongan biaya</Text>
              <Group gap={"xs"}>
                <Text c={"white"} fw={"bold"} fz={"h3"} ta={"center"}>hingga 50%</Text>
                <Anchor c={"maroon"} underline='never'>
                  <Text c={"white"} fw={"bold"} fz={"h3"} ta={"center"}>di sini!</Text>
                </Anchor>
              </Group>
            </Flex>
          </Box>
          <Box pt={25}>
            <Flex direction={"column"} align={"center"}>
              <Text fw={"inherit"} style={{ letterSpacing: "0.15em" }}>MENGAPA HARUS</Text>
              <Text fw={"bold"} fz={"40"}>PILIH INSTIKI?</Text>
            </Flex>
          </Box>
          <Box pt={30} pl={100} pr={100} pb={30}>
            <SimpleGrid
              cols={{ base: 1, sm: 2, lg: 3 }}
              spacing={{ base: 10, sm: 'xl' }}
              verticalSpacing={{ base: 'md', sm: 'xl' }}
            >
              <Box>
                <Card bg={"white"} >
                  <Flex direction={"row"} gap={"xl"} align={"center"} >
                    <Image src={"https://instiki.ac.id/wp-content/uploads/2022/01/Group-189.png"} alt='' w={72} />
                    <Text fw={"inherit"}>Akreditasi Nasional dan Internasional</Text>
                  </Flex>
                </Card>
              </Box>
              <Box>
                <Card bg={"white"} >
                  <Flex direction={"row"} gap={"xl"} align={"center"} >
                    <Image src={"https://instiki.ac.id/wp-content/uploads/2022/01/Group-190.png"} alt='' w={72} />
                    <Text fw={"inherit"}>Dosen Profesional, Handal dan Berjiwa Milenial</Text>
                  </Flex>
                </Card>
              </Box>
              <Box>
                <Card bg={"white"} >
                  <Flex direction={"row"} gap={"xl"} align={"center"} >
                    <Image src={"https://instiki.ac.id/wp-content/uploads/2022/01/Group-191.png"} alt='' w={72} />
                    <Text fw={"inherit"}>Sangat Cepat Masuk dalam Dunia Industri</Text>
                  </Flex>
                </Card>
              </Box>
            </SimpleGrid>
          </Box>
          <Box bg={"#C1C1C126"} pt={50} pl={100} pb={100}>
            <Flex direction={"column"}>
              <Text fw={"bolder"} fz={"40"} >Jadwal Penting</Text>
              <Text fz={"h2"}>Dapatkan informasi acara serta berita terbaru dari INSTIKI</Text>
            </Flex>
            <Flex pt={"xl"} align={"center"} justify={"center"}>
              <Card p={20} withBorder bg={"#C1C1C116"}>
                <Button size='63' variant='transparent'>
                  <Text c={"dark"}>TAMPILKAN LEBIH BANYAK</Text>
                </Button>
              </Card>
            </Flex>
          </Box>
          <PengumumanCivitas />
        </Stack>
        <TerbaruDariInstiki />
        <JanganLewatkanBerita />
        {/* footer page */}
        <FooterPage scrollA={scroll.y} />
      </Stack >
    </Box >
  );
}

function PengumumanCivitas() {
  return <Box pt={50} pl={100} pr={80} >
    <Text fw={"bold"} fz={"40"}>Pengumuman Civitas Academica</Text>
    <SimpleGrid
      pt={10}
      cols={{ base: 1, sm: 2, lg: 3 }}
    >
      <Box>
        <Stack gap={"sm"}>
          <Text fz={"h3"} fw={"bold"}>
            Pengumuman Beasiswa KIP 2024
          </Text>
          <Text>
            INFORMASI BEASISWA KIP 2024 Kami menginformasikan kepada seluruh calon penerima beasiswa KIP-Kuli...
          </Text>
        </Stack>
        <Box pt={10}>
          <Button radius={0} bg={"#E8AA02"} >
            <Text fw={"bold"} c={"dark"}>Baca Lebih...</Text>
          </Button>
        </Box>
      </Box>
      <Box>
        <Stack gap={"sm"}>
          <Text fz={"h3"} fw={"bold"}>
            Pengumuman SK Perubahan Nama Progra...
          </Text>
          <Text>
            Berkenaan telah diterbitkannya Keputusan Menteri Pendidikan, Kebudayaan, Riset, dan Teknologi Republ...
          </Text>
        </Stack>
        <Box pt={10}>
          <Button radius={0} bg={"#E8AA02"} >
            <Text fw={"bold"} c={"dark"}>Baca Lebih...</Text>
          </Button>
        </Box>
      </Box>
      <Box>
        <Stack gap={"sm"}>
          <Text fz={"h3"} fw={"bold"}>
            Pengumuman Kalender Akademik INSTIK...
          </Text>
          <Text>
            Diberitahukan kepada seluruh civitas akademika Institut Bisnis dan Teknologi Indonesia (INSTIKI), be...
          </Text>
        </Stack>
        <Box pt={10}>
          <Button radius={0} bg={"#E8AA02"} >
            <Text fw={"bold"} c={"dark"}>Baca Lebih...</Text>
          </Button>
        </Box>
      </Box>
    </SimpleGrid>
    <Box pt={20} pb={30}>
      <Flex align={"center"} justify={"center"}>
        <Card withBorder p={20}>
          <Text>TAMPILKAN LEBIH BANYAK</Text>
        </Card>
      </Flex>
    </Box>
  </Box>
}

function TerbaruDariInstiki() {
  return <Box pt={90} pl={100} pr={100} bg={"#C1C1C126"} pb={100}>
    <Text fw={"bold"} fz={"40"}>Terbaru di INSTIKI</Text>
    <Text fw={"inherit"} fz={"h4"}>Kumpulan artikel terbaru dengan berita informatif, edukatif dan terkini.</Text>
    <Box pt={20}>
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 4 }}
      >
        <Box>
          <Image src={"https://instiki.ac.id/wp-content/uploads/2024/10/dbbf2a90-fd40-4351-9443-a393864e4cd2.webp"} alt='' w={"280"} h={"250"} />
          <Text fw={"bolder"} fz={"lg"} >5 Pelajaran Hidup dari Film Home Sweet Loan yang Harus Kamu Tahu di Usia 20-an</Text>
          <Text fz={"lg"}>Buat kamu yang lagi asik-asiknya nonton Home Sweet Loan, pasti sadar kalau film ini bukan hanya sekadar cerita tentang impian membeli rumah. Film ini diam-diam</Text>
          <Flex align={"center"}>
            <Card radius={0} withBorder pt={5} pb={5} pl={10} pr={10}>
              <Text>Baca Lebih...</Text>
            </Card>
          </Flex>
        </Box>
        <Box>
          <Image src={"https://instiki.ac.id/wp-content/uploads/2024/10/DSC08953-scaled.jpg"} alt='' w={"280"} h={"250"} />
          <Text fw={"bolder"} fz={"lg"} >Tips Kuliah Sambil Kerja: Cara Jitu Bagi Waktu Ala Kampus IT Terbaik di Bali!</Text>
          <Text fz={"lg"}>Bagi civitas INSTIKI yang lagi kuliah sambil kerja, tantangannya memang nggak mudah, tetapi pastinya bisa banget dilakukan. Nggak jarang kamu harus bolak-balik antara kelas, kerjaan,</Text>
          <Flex align={"center"}>
            <Card radius={0} withBorder pt={5} pb={5} pl={10} pr={10}>
              <Text>Baca Lebih...</Text>
            </Card>
          </Flex>
        </Box>
        <Box>
          <Image src={"https://instiki.ac.id/wp-content/uploads/2024/10/DSC04187-scaled.jpg"} alt='' w={"280"} h={"250"} />
          <Text fw={"bolder"} fz={"lg"} >Gen Z Sering Burnout? Apa Itu Burnout dan Bagaimana Cara Mengatasinya?</Text>
          <Text fz={"lg"}>Kalau kamu pernah merasa capek banget secara mental, emosional, dan fisik karena beban kerja atau kehidupan sehari-hari, mungkin kamu sedang mengalami burnout. Fenomena ini gak</Text>
          <Flex align={"center"}>
            <Card radius={0} withBorder pt={5} pb={5} pl={10} pr={10}>
              <Text>Baca Lebih...</Text>
            </Card>
          </Flex>
        </Box>
        <Box>
          <Image src={"https://instiki.ac.id/wp-content/uploads/2024/10/DSC09597-scaled.jpg"} alt='' w={"280"} h={"250"} />
          <Text fw={"bolder"} fz={"lg"} >Mengenal Analisis SWOT: Kunci untuk Mengembangkan Ide Bisnis yang Solid</Text>
          <Text fz={"lg"}>Dalam dunia bisnis yang penuh tantangan, mengembangkan ide bisnis yang solid membutuhkan perencanaan yang matang. Salah satu alat yang efektif dan sering digunakan oleh para</Text>
          <Flex align={"center"}>
            <Card radius={0} withBorder pt={5} pb={5} pl={10} pr={10}>
              <Text>Baca Lebih...</Text>
            </Card>
          </Flex>
        </Box>
      </SimpleGrid>
    </Box>
    <Box pt={40}>
      <Flex align={"center"} justify={"center"}>
        <Card withBorder p={20}>
          <Text>TAMPILKAN LEBIH BANYAK</Text>
        </Card>
      </Flex>
    </Box>
  </Box>
}

function JanganLewatkanBerita() {
  const { hovered, ref } = useHover()
  return <Box pl={100} pt={30} pb={30} bg={"maroon"}>
    <Text fw={"bolder"} fz={"40"} c={"white"}>Jangan lewatkan berita terbaru!</Text>
    <Text fz={"25"} c={"white"}>Dapatkan informasi terkini mengenai jadwal penting dan event terbaru dari INSTIKI.</Text>
    <Box pt={20} pr={100} >
      <Card withBorder p={70} bg={"white"}>
        <Flex direction={"row"} align={"center"} wrap={"wrap"} justify={"end"}>
          <Flex gap={"lg"} wrap={"wrap"} flex={1}>
            <Box flex={1}>
              <TextInput
                label={<Text fw={"bold"} fz={"h3"}>Nama</Text>}
                styles={(theme) => ({
                  input: {
                    border: 'none',
                    borderBottom: `2px solid ${theme.colors.gray[4]}`,
                    borderRadius: 0,
                    // width: 450,
                    '&:focus': {
                      outline: 'none',
                      borderBottom: `2px solid ${theme.colors.blue[6]}`,
                    },
                  },
                })}
              />
            </Box>
            <Box pos={"relative"} p={"1"} flex={1}>
              <TextInput
                label={<Text fw={"bold"} fz={"h3"}>Email</Text>}
                styles={(theme) => ({
                  input: {
                    border: 'none',
                    borderBottom: `2px solid ${theme.colors.gray[4]}`,
                    borderRadius: 0,
                    // width: 450,
                    '&:focus': {
                      outline: 'none',
                      borderBottom: `2px solid ${theme.colors.blue[6]}`,
                    },
                  },
                })}
              />
            </Box>
          </Flex>
          <Button px={"70"} ref={ref as any} radius={0} component={Link} href={"/"} bg={hovered ? "yellow" : "dark"} h={"70"}>
            <Text size='24'>KIRIM</Text>
          </Button>
        </Flex>
      </Card>
    </Box>
  </Box>
}

// footer page
function FooterPage({ scrollA }: { scrollA: number }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scroll, scrollTo] = useWindowScroll();
  const router = useRouter();
  return <Box bg={"black"} pl={100} pt={50} pr={100} pb={40} pos={"relative"}>
    <Box>
      <Image src={"https://instiki.ac.id/wp-content/uploads/elementor/thumbs/ASSET-LANDSCAPE_MONOKROM_1-pks8jve2bcasbvayvfex084yz718r474c09rlzeecu.png"} alt='' w={"300"} />
    </Box>
    <Box pt={20}>
      <Flex direction={"row"} gap={"md"}>
        <FaInstagram color='white' size={40} />
        <FaSquareFacebook color='white' size={40} />
        <FaTwitter color='white' size={40} />
        <FaYoutube color='white' size={40} />
      </Flex>
    </Box>
    <Box pt={30} pb={90} >
      <SimpleGrid
        cols={{ base: 1, sm: 1, lg: 6 }}

      >
        <Box>
          <Text fz={"lg"} c={"white"} fw={"bold"}>INSTITUT BISNIS DAN TEKNOLOGI INDONESIA</Text>
          <Text fz={"md"} c={"white"}>Senin – Sabtu | 08.00 – 22.00 WITA</Text>
          <Box pt={30}>
            <Flex direction={"row"} gap={"xl"}>
              <Box>
                <IoLocationOutline color='white' size={40} />
              </Box>
              <Text c={"white"} fw={"bold"}>Jl. Tukad Pakerisan No. 97 Denpasar, Bali, Indonesia.</Text>
            </Flex>
            <Flex align={"center"} pt={10} direction={"row"} gap={"xl"}>
              <Box>
                <FiPhone color='white' size={40} />
              </Box>
              <Text c={"white"} fw={"bold"}>+62 361-256-995</Text>
            </Flex>
            <Flex align={"center"} pt={10} direction={"row"} gap={"xl"}>
              <Box pt={10}>
                <MdMailOutline color='white' size={40} />
              </Box>
              <Text c={"white"} fw={"bold"}>humas@instiki.ac.id</Text>
            </Flex>
          </Box>
        </Box>
        <Box pl={10}>
          <Text pb={10} fz={"lg"} c={"white"} fw={"bold"}>Belajar Bersama Kami</Text>
          <Text fz={"md"} c={"white"}>Karir</Text>
          <Text fz={"md"} c={"white"}>Keunggulan Kampus</Text>
          <Text pt={10} fz={"md"} c={"white"}>Kegiatan</Text>
        </Box>
        <Box pl={10}>
          <Text pb={10} fz={"lg"} c={"white"} fw={"bold"}>Akademik</Text>
          <Text fz={"md"} c={"white"}>Modul Mata Kuliah</Text>
          <Text fz={"md"} c={"white"}>Portal Dosen</Text>
          <Text fz={"md"} c={"white"}>Portal Mahasiswa</Text>
          <Text fz={"md"} c={"white"}>Identitas Visual</Text>
          <Text fz={"md"} c={"white"}>Kampus Merdeka</Text>
          <Text fz={"md"} c={"white"}>Kerja Praktek</Text>
          <Text fz={"md"} c={"white"}>Tugas Akhir</Text>
        </Box>
        <Box pl={10}>
          <Text pb={10} fz={"lg"} c={"white"} fw={"bold"}>Kehidupan Kampus</Text>
          <Text fz={"md"} c={"white"}>Mahasiswa</Text>
          <Text fz={"md"} c={"white"}>Alumni</Text>
        </Box>
        <Box pl={10}>
          <Text pb={10} fz={"lg"} c={"white"} fw={"bold"}>Riset & Inovasi</Text>
          <Text fz={"md"} c={"white"}>Penelitian</Text>
          <Text fz={"md"} c={"white"}>Pengabdian</Text>
          <Text fz={"md"} c={"white"}>Publikasi</Text>
          <Text fz={"md"} c={"white"}>Inovasi</Text>
        </Box>
        <Box pl={10}>
          <Text pb={10} fz={"lg"} c={"white"} fw={"bold"}>Tentang Kami</Text>
          <Text fz={"md"} c={"white"}>Profil Kampus</Text>
          <Text fz={"md"} c={"white"}>Beasiswa</Text>
          <Text pt={10} fz={"lg"} c={"white"} fw={"bold"}>FAQ</Text>
          <Text fz={"md"} c={"white"}>Daftar Sekarang</Text>
        </Box>
      </SimpleGrid>
    </Box>
    <Box pt={50} pl={50} pr={50}>
      <Flex pt={20} justify={"space-between"} >
        <ActionIcon
          display={scrollA < 2746 ? "none" : "flex"}
          size={"80"}
          radius={"100"}
          onClick={() => scrollTo({ y: 0 })}
          bg={"maroon"} c={"white"}
          pos={"fixed"}
          bottom={75}>
          <FaArrowUp size={50} />

        </ActionIcon>
        <Text c={"black"} pl={20}>
          {scrollA}
        </Text>
        <ActionIcon
          display={"flex"}
          pos={"fixed"}
          bottom={80}
          right={150}
          color='green'
          size={"80"}
          radius={"100"}
          onClick={() => router.push("https://api.whatsapp.com/send/?phone=6281338969832&text&type=phone_number&app_absent=0")}>
          <FaWhatsapp size={50} />
        </ActionIcon>
      </Flex>
    </Box>
  </Box>
}

export default LayoutBackground;