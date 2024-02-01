class CreateGallery{
    get titleInputField(){
        return cy.get("#title");
    }

    get descriptionInpturField(){
        return cy.get("#description");
    }

    get imageURLInputField(){
        return cy.get("input[placeholder='image url']");
    }

    createGalleryFunction(title, description, imageURL){
        this.titleInputField.type(title);
        this.descriptionInpturField.type(description);
        this.imageURLInputField.type(imageURL);
        cy.get("button").contains("Submit").click();
    }

}

export const createGallery = new CreateGallery();