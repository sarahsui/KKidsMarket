function Car(options) {
    const model = {
        name: options.name,
        description: options.description,
        price: Number(options.price),
        imageUrl: options.imageUrl,
        imageStoragePath: options.imageStoragePath,
        isModelValid: !!options.name && !!options.imageUrl
    };

    return model;
}

module.exports = Car;
