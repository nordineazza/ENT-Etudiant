package com.paris10.ent.entities;

import javax.persistence.*;

@Entity
@Table(name = "etudiant")
public class Etudiant {

    @OneToOne
    @JoinColumn(name = "id_user")
    User user;
    @Id
    @Column(name = "id_user")
    private long id;
    @ManyToOne
    @JoinColumn(name = "id_promotion")
    private Promotion promotion;

    @Enumerated(EnumType.STRING)
    private RoleEtudiant role_etudiant;

    private int credit, num_etudiant;


    public Etudiant() { }

    /**
     * @todo test to init the int to 0. The app doesn't crash for String which takes null but crashes for int fields
     * getting a 0
     **/
    public Etudiant(RoleEtudiant role_etudiant, int credit, Promotion promo, int num_etudiant, User user) {
        this.role_etudiant = role_etudiant;
        this.credit = credit;
        this.promotion = promo;
        this.num_etudiant = num_etudiant;
        this.user = user;
    }

    public RoleEtudiant getRole_etudiant() {
        return role_etudiant;
    }

    public void setRole_etudiant(RoleEtudiant role_etudiant) {
        this.role_etudiant = role_etudiant;
    }

    public int getCredit() {
        return credit;
    }

    public void setCredit(int credit) {
        this.credit = credit;
    }

    public int getNum_etudiant() {
        return num_etudiant;
    }

    public void setNum_etudiant(int num_etudiant) {
        this.num_etudiant = num_etudiant;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Promotion getPromotion() {
        return promotion;
    }

    public void setPromotion(Promotion promotion) {
        this.promotion = promotion;
    }
}
