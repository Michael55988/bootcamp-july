def game(board):
    """Affiche le plateau du jeu"""
    for ligne in board:
        print(" | ".join(ligne))  # Affiche une ligne du plateau
        print("-" * 9)  # Sépare les lignes par des tirets


def ask_play(player):
    """Demande au joueur où il veut jouer et vérifie l'entrée"""
    while True:
        try:
            ligne = int(input(f"Joueur {player}, entrez le numéro de ligne (0, 1, 2) : "))
            colonne = int(input(f"Joueur {player}, entrez le numéro de colonne (0, 1, 2) : "))
            if 0 <= ligne <= 2 and 0 <= colonne <= 2:
                return ligne, colonne
            else:
                print(" Numéros invalides, réessayez !")
        except ValueError:
            print(" Veuillez entrer des nombres valides !")


def check_victory(board, player):
    """Vérifie si le joueur actuel a gagné"""
    # Vérifier les lignes et colonnes
    for i in range(3):
        if all(board[i][j] == player for j in range(3)):  # Ligne complète
            return True
        if all(board[j][i] == player for j in range(3)):  # Colonne complète
            return True

    # Vérifier les diagonales
    if all(board[i][i] == player for i in range(3)):  # Diagonale principale
        return True
    if all(board[i][2 - i] == player for i in range(3)):  # Diagonale inverse
        return True

    return False  # Aucun alignement, pas de victoire


def morpion():
    """Boucle principale du jeu"""
    board = [[" " for _ in range(3)] for _ in range(3)]  # Plateau vide
    player1 = "X"  # X commence

    for tour in range(9):  # 9 tours max (car 3x3 cases)
        game(board)
        print(f"Tour {tour+1}: Joueur {player1}")

        while True:
            ligne, colonne = ask_play(player1)
            if board[ligne][colonne] == " ":
                board[ligne][colonne] = player1  # Placer le symbole
                break
            else:
                print("⚠️ Case déjà prise, réessayez !")

        if check_victory(board, player1):
            game(board)
            print(f" Joueur {player1} a gagné ! Félicitations ! ")
            return  # Fin du jeu

        player1 = "O" if player1 == "X" else "X"  # Changer de joueur

    game(board)
    print(" Match nul ! Bien joué à tous !")


# Lancer le jeu
morpion()


