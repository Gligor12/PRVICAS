class EditGallery{
    get titleInputField(){
        return cy.get("#title");
    }

    get descriptionInputField(){
        return cy.get("#description");
    }

    editGalleryFunction(title, description){
        this.titleInputField.clear().type(title);
        this.descriptionInputField.clear().type(description);
        cy.get(".btn-custom").eq(0).click();
    }
}

export const editGallery = new EditGallery();