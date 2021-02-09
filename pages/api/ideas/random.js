import { PrismaClient } from '@prisma/client'

import getRandomInt from 'utils/functions/getRandomInt'

const prisma = new PrismaClient()

export default async (req, res) => {
	if (req.method === 'GET') {
		try {
			const ideasCount = await prisma.idea.count()

			const randomIdeaID = getRandomInt(1, ideasCount)
			const idea = await prisma.idea.findUnique({ 
				where: { id: randomIdeaID }, 
				include: { 
					examples: {
						select: {
							id: true,
							title: true,
							url: true
						}
					} 
				} 
			})

			if (!idea) res.status(404).json({ message: "Couldn't get random idea" })

			res.json(idea)
		} catch (error) {
			console.log("ERROR", error)
			res.status(500).json({ message: "An error occured on the server" })
		}
	} else {
		res.status(404).json({ message: `Couldn't ${req.method} ${req.url}` })
	}
}
