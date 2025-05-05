import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, Chip, Button, Stack, Paper } from '@mui/material';

const projects = [
    {
        title: 'BlockchainRPG',
        description: 'A decentralized blockchain game where players can fight monsters, craft items, and collect digital tokens and NFTs.',
        technologies: ['Unity', 'React', 'Web3', 'Node.js', 'EOSIO', 'Blockchain', 'PlayFab', 'Full Stack'],
        image: '/blockchainrpg.jpg',
        buttons: [
            {text: 'View Site', link: 'https://blockchainrpg.io'}
        ],
    },
    {
        title: 'Tultr',
        description: 'A self hosted forum built with Flarum, MariaDB, and Docker.',
        technologies: ['Flarum', 'MariaDB', 'Docker', 'Blog', 'Website'],
        image: '/tultr.jpg',
        buttons: [
            {text: 'View Site', link: 'https://tultr.com'}
        ],
    },
    {
        title: 'My Portfolio Website',
        description: 'This website is made from scratch with React, TypeScript, and Vite. This site uses styled components from Material UI and is hosted using Cloudflare Pages.',
        technologies: ['React', 'TypeScript', 'Vite', 'Website', 'Cloudflare Pages', 'GitHub', 'Javascript', 'Node.js'],
        image: '/portfolio.jpg',
        buttons: [
            {text: 'Source Code', link: 'https://github.com/tomny-codes/tomny.dev'}, 
            {text: 'Deployed Site', link: 'https://tomny.dev'}
        ],
    },
];

const Projects = () => {
    return (
        <Box sx={{ py: 8, pt: 0, backgroundColor: 'background.default' }}>
            <Container maxWidth="md">
                <Paper elevation={3} sx={{ p: 4, borderRadius: 3,  }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Featured Projects
                    </Typography>
                    <Grid container spacing={4} >
                        {projects.map((project, index) => (
                                <Card sx={{ height: '100%', width: '100%' }}>
                                    <CardMedia
                                        component="img"
                                        image={project.image}
                                        alt={project.title}
                                        sx={{
                                            width: '100%',
                                            height: 400,  // Adjust height as needed
                                            objectFit: 'cover',  // Ensures the image fills the space while maintaining its aspect ratio
                                            objectPosition: 'center',  // Centers the image in the available space
                                          }}
                                    />
                                    <CardContent>
                                        <Typography variant="h5" component="div" gutterBottom>
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" paragraph>
                                            {project.description}
                                        </Typography>
                                        <Stack direction="row" spacing={1} flexWrap="wrap" mt={1}>
                                            {project.technologies.map((tech, i) => (
                                                <Chip key={i} label={tech} variant="outlined" size="small" />
                                            ))}
                                        </Stack>
                                    </CardContent>
                                    {project.buttons ? project.buttons.map((button, i) => (
                                        <Button
                                            href={button.link}
                                            target="_blank"
                                            variant="contained"
                                            sx={{ margin: 2 }}
                                        >
                                            {button.text}
                                        </Button>
                                    )) : null}

                                </Card>
                        ))}
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
};

export default Projects;
