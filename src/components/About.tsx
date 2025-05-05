import { Box, Container, Typography, Paper, Chip, Stack } from '@mui/material';

const About = () => {
	return (
		<Box sx={{ py: 8, pt: 0,  backgroundColor: 'background.default' }}>
			<Container maxWidth="md">
				<Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
					<Typography variant="h4" component="h2" gutterBottom>
						About Me
					</Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        Hey, I'm Tom! Nice to meet you! 👋
					</Typography>
					<Typography variant="body1" color="text.secondary" paragraph>
						I’m a developer passionate about building systems from the ground up and constantly pushing into new technical territory. My curiosity drives me to explore emerging technologies and frameworks that challenge my thinking and expand my toolkit.
					</Typography>
					<Typography variant="body1" color="text.secondary" paragraph>
						Lately, I’ve been diving into areas like <strong>game development</strong>, <strong>blockchain</strong> systems, and experimenting with <strong>AI and machine learning</strong>. I enjoy turning complex ideas into clean, functional products — and I’m always learning, always shipping.
					</Typography>
					<Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 500 }}>
						Current Interests & Tools
					</Typography>
					<Stack direction="row" spacing={1} flexWrap="wrap" mt={1}>
						<Chip label="React" />
						<Chip label="TypeScript" />
						<Chip label="Node.js" />
						<Chip label="Unity / Godot" />
						<Chip label="EOSIO" />
						<Chip label="Web3" />
						<Chip label="DevOps" />
						<Chip label="AI" />
						<Chip label="Cloud Computing" />
						<Chip label="Python" />
						<Chip label="Homelab" />
						<Chip label="Automation" />
					</Stack>
				</Paper>
			</Container>
		</Box>
	);
};

export default About;
