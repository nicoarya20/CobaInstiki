'use client'
import { ActionIcon, Box, Paper, ScrollArea, Text } from '@mantine/core';
import { useIntersection, useShallowEffect } from '@mantine/hooks';
import { useRef } from 'react';
import { MdArrowDropUp } from 'react-icons/md';

export default function Demo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  useShallowEffect(() => {
    console.log(entry?.isIntersecting)
  }, [entry?.isIntersecting])

  return (
    <ScrollArea p={"lg"} h={"100vh"} ref={containerRef}>
      <Paper p={"lg"} bg={"cyan"}  h={3000}>
        <Box pt={260} pb={280}>
          <Paper
            ref={ref}
            p="xl"
            style={{
              backgroundColor: entry?.isIntersecting
                ? 'var(--mantine-color-teal-7)'
                : 'var(--mantine-color-red-7)',
              // minWidth: '50%',
            }}
          >
            <Text c="#fff" fw={700}>
              {entry?.isIntersecting ? 'Fully visible' : 'Obscured'}
            </Text>
          </Paper>
        </Box>
      </Paper>
      {JSON.stringify(entry)}
      <ActionIcon size={52} display={entry?.isIntersecting? "none" : "block"} pos={"fixed"} bottom={0}> 
        <MdArrowDropUp size={52} />
      </ActionIcon>
    </ScrollArea>
  );
}