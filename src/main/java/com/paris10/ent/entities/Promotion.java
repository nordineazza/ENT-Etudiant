package com.paris10.ent.entities;

import javax.persistence.*;

@Entity
@Table(name = "promotion")
public class Promotion {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_promotion")
    private long id;

    private String nom_promo, annee;

    public Promotion() {
    }

    public Promotion(String nom_promo, String annee) {
        this.nom_promo = nom_promo;
        this.annee = annee;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNom_promo() {
        return nom_promo;
    }

    public void setNom_promo(String nom_promo) {
        this.nom_promo = nom_promo;
    }

    public String getAnnee() {
        return annee;
    }

    public void setAnnee(String annee) {
        this.annee = annee;
    }
}
