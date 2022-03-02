<h2>Jouabilité :</h2> 
Voici un mini-jeu de calcul mental en javascript.
<br>
Au départ vous devez choisir une difficulté, ensuite vous n'aurez plus qu'à vous tester sur votre capacité à calculer !
<br>

Difficultés :
<br>
Facile : "+" et "-" entre 1 et 10
<br>
Moyen : "+" et "-", "*" entre 1 et 10
<br>
Difficile : "+", "-", "*" entre 1 et 20
<br>


<h2>Aspect technique :</h2> 

J'ai crée une constante generateQuestion qui va donc me générer une question.
<br>
Pour cela je génére aléatoirement deux nombres et un opérateur en fonction de la difficulté.
<br>
Si par exemple je prends la difficulté difficile.
<br>
Ma question est égale à : Un nombre aléatoire entre 1 et 20, un opérateur ("+", "-", "*"), et un nouveau nombre entre 1 et 20.
<br>
Ensuite j'ai une constante showNewQuestion qui va me permettre d'afficher une nouvelle question.
<br>
Egalement il y'a une constante getAnswer pour avoir la réponse à la question.
<br>


Maintenant je veux générer différentes propositions, pour cela j'ai une constante getPossibilities qui va me générer 4 propositions
<br>
Dans mes propositions il y'aura bien évidemment la réponse mais également des propositions qui sont égales à la la réponse + ou - 10 au maximum.
<br>
Exemple : 8*8 
<br>
La réponse est égale à 64 et les propositions se situeront entre 64+10 et 64-10, j'aurais donc des propositions comme 57, 63, 60 ...
<br>
Pour finir j'ai crée un autre fichier javascript pour gérer tout ce qui me permet d'afficher mes questions, mes réponses, les bouttons ...
<br>
<h2> Maintenant c'est à vous de tester ! <h2>
 <br>
[Jouer](https://calculus-nine.vercel.app/).

