document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    let total=0;
     
    const favSection = document.createElement('section');
            favSection.id = 'favorites';

            const favTitle =  document.createElement('h2');
            favTitle.textContent = 'Favorite Items';
        
            const favList = document.createElement('ul');

            const totalText =document.createElement('p');
            totalText.textContent = 'Total:$0.00';

            favSection.appendChild(favTitle);
            favSection.appendChild(favList);
            favSection.appendChild(totalText);
            
            document.querySelector('main').appendChild(favSection);

            for(let i=0; i<cards.length; i++){

                const card = cards[i];
                const name = card.getAttribute('data-name');
                const price = parseFloat(card.getAttribute('data-price'));
                const priceText = document.createElement('p');
                priceText.textContent = "$"+price;
                card.appendChild(priceText);

                const button = document.createElement('button');
                button.textContent = 'Add to Favorites';
                card.appendChild(button);
                let listItem;
                button.addEventListener('click', function() {
                    if(card.classList.contains('added')){
                        card.classList.remove('added');
                        button.textContent = 'Add to Favorites';
                        favList.removeChild(listItem);
                        total -= price;
                    } else {
                        card.classList.add('added');
                        button.textContent = 'Remove from Favorites';
                        listItem = document.createElement('li');
                        listItem.textContent = name + " - $" + price;
                        favList.appendChild(listItem);
                        total += price;
                    }
                    totalText.textContent = 'Total: $' + total.toFixed(2);
                }   );
            }
});    