const { v2:cloudinary } = require('cloudinary')

cloudinary.config({ 
    cloud_name: 'dmzyu4n5f', 
    api_key: '984458339622898', 
    api_secret: 'A_DtYNjVArnB2bBRwz1eOaupiC4',
    secure: true,
})

const getCloudinaryItems = async () => {
    try {
        const result = await cloudinary.api.resources()
        console.log('Cloudinary Items:', result.resources)
    } catch (error) {
        console.error('Error fetching Cloudinary items:', error.message)
    }
}

getCloudinaryItems()