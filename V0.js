const dietaryOptions = {
    'vegetarian': [
        { name: "Lentilles / Pois chiches", price: 2.50, quantity: "500g", yukaScore: "~90/100" },
        { name: "Tofu", price: 3.00, quantity: "200g", yukaScore: "~85/100" },
        { name: "Légumes frais (brocolis, carottes, épinards)", price: 7.00, quantity: "1.5kg", yukaScore: "~80-100/100" },
        { name: "Fruits (bananes, pommes, oranges)", price: 6.00, quantity: "1.2kg", yukaScore: "~90-100/100" },
        { name: "Quinoa", price: 3.50, quantity: "400g", yukaScore: "~85/100" },
        { name: "Œufs", price: 3.00, quantity: "6 œufs", yukaScore: "~90/100" },
        { name: "Lait d'amande", price: 3.00, quantity: "1L", yukaScore: "~85/100" },
        { name: "Pain complet", price: 2.50, quantity: "400g", yukaScore: "~85/100" },
        { name: "Fromage râpé (option lacto-végétarienne)", price: 4.00, quantity: "200g", yukaScore: "~85/100" },
        { name: "Amandes", price: 4.50, quantity: "200g", yukaScore: "~90/100" },
    ],
    'vegan': [
        { name: "Tofu", price: 3.50, quantity: "200g", yukaScore: "~85/100" },
        { name: "Tempeh", price: 4.50, quantity: "200g", yukaScore: "~85/100" },
        { name: "Légumes frais (carottes, courgettes, épinards)", price: 7.00, quantity: "1.5kg", yukaScore: "~80-100/100" },
        { name: "Fruits (bananes, pommes)", price: 6.00, quantity: "1.2kg", yukaScore: "~90-100/100" },
        { name: "Pois chiches", price: 2.50, quantity: "500g", yukaScore: "~90/100" },
        { name: "Lait d'avoine", price: 3.00, quantity: "1L", yukaScore: "~85/100" },
        { name: "Quinoa", price: 3.50, quantity: "400g", yukaScore: "~85/100" },
        { name: "Riz complet", price: 3.00, quantity: "500g", yukaScore: "~85/100" },
        { name: "Amandes", price: 4.50, quantity: "200g", yukaScore: "~90/100" },
        { name: "Beurre d'amande", price: 4.50, quantity: "200g", yukaScore: "~85/100" },
    ],
    'gluten-free': [
        { name: "Pain sans gluten", price: 4.50, quantity: "400g", yukaScore: "~75/100" },
        { name: "Légumes frais (carottes, épinards, brocolis)", price: 7.00, quantity: "1.5kg", yukaScore: "~80-100/100" },
        { name: "Fruits (bananes, pommes, oranges)", price: 6.00, quantity: "1.2kg", yukaScore: "~90-100/100" },
        { name: "Quinoa", price: 3.50, quantity: "400g", yukaScore: "~85/100" },
        { name: "Riz complet", price: 3.00, quantity: "500g", yukaScore: "~85/100" },
        { name: "Œufs", price: 3.50, quantity: "6 œufs", yukaScore: "~90/100" },
        { name: "Lait d'amande", price: 3.00, quantity: "1L", yukaScore: "~85/100" },
        { name: "Amandes", price: 4.50, quantity: "200g", yukaScore: "~90/100" },
        { name: "Lentilles", price: 2.50, quantity: "500g", yukaScore: "~90/100" },
        { name: "Sauce tomate sans gluten", price: 4.00, quantity: "500g", yukaScore: "~85/100" },
    ],
    'lactose-free': [
        { name: "Lait d'amande", price: 3.00, quantity: "1L", yukaScore: "~85/100" },
        { name: "Légumes frais (épinards, courgettes, carottes)", price: 7.00, quantity: "1.5kg", yukaScore: "~80-100/100" },
        { name: "Fruits (bananes, pommes, oranges)", price: 6.00, quantity: "1.2kg", yukaScore: "~90-100/100" },
        { name: "Quinoa", price: 3.50, quantity: "400g", yukaScore: "~85/100" },
        { name: "Riz complet", price: 3.00, quantity: "500g", yukaScore: "~85/100" },
        { name: "Tofu", price: 3.50, quantity: "200g", yukaScore: "~85/100" },
        { name: "Amandes", price: 4.50, quantity: "200g", yukaScore: "~90/100" },
        { name: "Pois chiches", price: 2.50, quantity: "500g", yukaScore: "~90/100" },
        { name: "Lait de coco", price: 3.50, quantity: "400mL", yukaScore: "~85/100" },
        { name: "Beurre de cacahuète", price: 4.00, quantity: "200g", yukaScore: "~85/100" },
    ],
};

const recipes = {
    'vegetarian': `
        <div class="recipe">
            <h3>Végétarisme : Salade de quinoa aux légumes et œufs durs</h3>
            <h4>Ingrédients :</h4>
            <ul>
                <li>100g de quinoa cuit (précuit ou cuisson rapide)</li>
                <li>1 carotte râpée</li>
                <li>1 poignée d'épinards frais</li>
                <li>1 œuf dur</li>
                <li>1 cuillère à soupe de fromage râpé (optionnel)</li>
                <li>1 cuillère à soupe d'huile d'olive</li>
                <li>Sel, poivre, jus de citron</li>
            </ul>
            <h4>Préparation :</h4>
            <ol>
                <li>Faites cuire le quinoa selon les instructions du paquet (généralement 10 minutes).</li>
                <li>Pendant ce temps, faites bouillir l'œuf (8-10 minutes pour un œuf dur).</li>
                <li>Dans un bol, mélangez les carottes râpées, les épinards frais, et l'œuf coupé en morceaux.</li>
                <li>Ajoutez le quinoa cuit, assaisonnez avec l'huile d'olive, le jus de citron, du sel et du poivre.</li>
                <li>Saupoudrez de fromage râpé si désiré.</li>
            </ol>
            <p>Prêt en 10 minutes !</p>
        </div>
    `,
    'vegan': `
        <div class="recipe">
            <h3>Véganisme : Stir-fry de tofu et légumes au quinoa</h3>
            <h4>Ingrédients :</h4>
            <ul>
                <li>100g de tofu coupé en cubes</li>
                <li>100g de quinoa cuit (précuit ou cuisson rapide)</li>
                <li>1 courgette coupée en dés</li>
                <li>1 carotte râpée</li>
                <li>1 cuillère à soupe d'huile d'olive</li>
                <li>Sauce soja (sans gluten si besoin), poivre</li>
            </ul>
            <h4>Préparation :</h4>
            <ol>
                <li>Fa
ites cuire le quinoa (environ 10 minutes).</li>
                <li>Pendant ce temps, dans une poêle chaude, faites revenir les cubes de tofu avec un peu d'huile d'olive pendant 5 minutes.</li>
                <li>Ajoutez les courgettes et les carottes dans la poêle et faites-les sauter pendant 3-4 minutes.</li>
                <li>Assaisonnez avec de la sauce soja et du poivre.</li>
                <li>Servez le tout avec le quinoa cuit.</li>
            </ol>
            <p>Prêt en 10 minutes !</p>
        </div>
    `,
    'gluten-free': `
        <div class="recipe">
            <h3>Sans Gluten : Wrap de salade de lentilles et légumes frais</h3>
            <h4>Ingrédients :</h4>
            <ul>
                <li>100g de lentilles cuites (précuites ou cuisson rapide)</li>
                <li>1 grande feuille de salade ou pain sans gluten (pour le wrap)</li>
                <li>1 carotte râpée</li>
                <li>1 poignée d'épinards</li>
                <li>1 cuillère à soupe de sauce tomate sans gluten</li>
                <li>1 cuillère à soupe d'huile d'olive</li>
                <li>Sel, poivre</li>
            </ul>
            <h4>Préparation :</h4>
            <ol>
                <li>Faites chauffer les lentilles précuites (ou utilisez des lentilles en conserve déjà cuites).</li>
                <li>Mélangez les lentilles avec les carottes râpées, les épinards, et la sauce tomate.</li>
                <li>Assaisonnez avec de l'huile d'olive, du sel et du poivre.</li>
                <li>Garnissez une grande feuille de salade ou un pain sans gluten de ce mélange pour en faire un wrap.</li>
                <li>Roulez et servez.</li>
            </ol>
            <p>Prêt en 10 minutes !</p>
        </div>
    `,
    'lactose-free': `
        <div class="recipe">
            <h3>Sans Lactose : Curry rapide au lait de coco et pois chiches</h3>
            <h4>Ingrédients :</h4>
            <ul>
                <li>100g de pois chiches cuits (en conserve ou précuits)</li>
                <li>100ml de lait de coco</li>
                <li>1 poignée d'épinards frais</li>
                <li>1 carotte râpée</li>
                <li>1 cuillère à soupe d'huile d'olive</li>
                <li>1 cuillère à café de curry en poudre</li>
                <li>Sel, poivre</li>
            </ul>
            <h4>Préparation :</h4>
            <ol>
                <li>Faites chauffer l'huile d'olive dans une poêle.</li>
                <li>Ajoutez les pois chiches, les épinards, et la carotte râpée, faites revenir pendant 2-3 minutes.</li>
                <li>Ajoutez le lait de coco et le curry, et laissez mijoter 5 minutes.</li>
                <li>Assaisonnez avec du sel et du poivre.</li>
                <li>Servez avec du riz ou du quinoa cuit à l'avance.</li>
            </ol>
            <p>Prêt en 10 minutes !</p>
        </div>
    `,
};

function createDietaryPreferences() {
    const container = document.getElementById('dietaryPreferences');
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'diet-options';

    Object.keys(dietaryOptions).forEach(diet => {
        const button = document.createElement('button');
        button.className = 'diet-option';
        button.textContent = getDietLabel(diet);
        button.onclick = () => selectDiet(diet);
        optionsDiv.appendChild(button);
    });

    container.appendChild(optionsDiv);

    const resultDiv = document.createElement('div');
    resultDiv.id = 'dietResult';
    container.appendChild(resultDiv);
}

function getDietLabel(diet) {
    switch (diet) {
        case 'vegetarian': return 'Végétarisme';
        case 'vegan': return 'Véganisme';
        case 'gluten-free': return 'Sans gluten';
        case 'lactose-free': return 'Sans lactose';
        default: return diet;
    }
}

function selectDiet(diet) {
    const buttons = document.querySelectorAll('.diet-option');
    buttons.forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');

    const resultDiv = document.getElementById('dietResult');
    const items = dietaryOptions[diet];
    const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

    let html = `
        <h3>Liste d'aliments recommandés</h3>
        <table>
            <thead>
                <tr>
                    <th>Aliment</th>
                    <th>Prix estimé (€)</th>
                    <th>Quantité</th>
                    <th>Score Yuka</th>
                </tr>
            </thead>
            <tbody>
    `;

    items.forEach(item => {
        html += `
            <tr>
                <td>${item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>${item.yukaScore}</td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
        <p class="total">Total estimé : ${totalPrice.toFixed(2)} - ${(totalPrice + 3).toFixed(2)} €</p>
    `;

    html += recipes[diet];

    resultDiv.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', createDietaryPreferences);