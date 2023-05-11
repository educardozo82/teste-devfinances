/// <reference types="cypress" />




describe('finances', () => {

    beforeEach(() => {
        cy.visit('https://devfinance-agilizei.netlify.app/')

    });
       
    it('entradas de saldo', () => {
      
      cy.get('#data-table tbody tr').should('have.length',0) // confirma se a tabela esta vazia
    
    // realiza 5 inserções 
      cy.get('[class="button new"]').click();
      cy.get('[placeholder="Descrição"]').type('salario');
      cy.get('[type="number"]').type('2000');
      cy.get('[type="date"]').type('2023-05-05');
      cy.get('button').click();

      cy.get('[class="button new"]').click();
      cy.get('[placeholder="Descrição"]').type('vendas');
      cy.get('[type="number"]').type('500');
      cy.get('[type="date"]').type('2023-05-08');
      cy.get('button').click();

      cy.get('[class="button new"]').click();
      cy.get('[placeholder="Descrição"]').type('bonificação');
      cy.get('[type="number"]').type('120');
      cy.get('[type="date"]').type('2023-05-09');
      cy.get('button').click();

      cy.get('[class="button new"]').click();
      cy.get('[placeholder="Descrição"]').type('adiantamento');
      cy.get('[type="number"]').type('400');
      cy.get('[type="date"]').type('2023-05-10');
      cy.get('button').click();

      cy.get('[class="button new"]').click();
      cy.get('[placeholder="Descrição"]').type('vendas');
      cy.get('[type="number"]').type('200');
      cy.get('[type="date"]').type('2023-05-10');
      cy.get('button').click();
        
      cy.get('#data-table tbody tr').should('have.length',5);  // confirmna se a tabela esta com 5 inserçoes
  
    });
     
    // realiza 5 saídas
    // lançar o valor com sinal negativo ex: -50

    it('saídas de saldo', () => {

        cy.get('#data-table tbody tr').should('have.length',0) // confirma se a tabela esta vazia

    // realiza 5 saídas
    // lançar o valor com sinal negativo ex: -50

        cy.get('[class="button new"]').click();
        cy.get('[placeholder="Descrição"]').type('gasolina');
        cy.get('[type="number"]').type('-150');
        cy.get('[type="date"]').type('2023-05-03');
        cy.get('button').click();
  
        cy.get('[class="button new"]').click();
        cy.get('[placeholder="Descrição"]').type('farmacia');
        cy.get('[type="number"]').type('-90');
        cy.get('[type="date"]').type('2023-05-06');
        cy.get('button').click();
  
        cy.get('[class="button new"]').click();
        cy.get('[placeholder="Descrição"]').type('mecanico');
        cy.get('[type="number"]').type('-350');
        cy.get('[type="date"]').type('2023-05-09');
        cy.get('button').click();
  
        cy.get('[class="button new"]').click();
        cy.get('[placeholder="Descrição"]').type('emprestimo');
        cy.get('[type="number"]').type('-590');
        cy.get('[type="date"]').type('2023-05-10');
        cy.get('button').click();
  
        cy.get('[class="button new"]').click();
        cy.get('[placeholder="Descrição"]').type('restaurante');
        cy.get('[type="number"]').type('-120');
        cy.get('[type="date"]').type('2023-05-10');
        cy.get('button').click();
        cy.get('#data-table tbody tr').should('have.length',5);  // confirmna se a tabela esta com 5 inserçoes

       
  
    });

    it('entradas e saídas', () => {
      
      cy.get('#data-table tbody tr').should('have.length',0) // confirma se a tabela esta vazia
    
         //entradas
      cy.get('[class="button new"]').click();
      cy.get('[placeholder="Descrição"]').type('salario');
      cy.get('[type="number"]').type('2000');
      cy.get('[type="date"]').type('2023-05-05');
      cy.get('button').click();

      cy.get('[class="button new"]').click();
      cy.get('[placeholder="Descrição"]').type('vendas');
      cy.get('[type="number"]').type('500');
      cy.get('[type="date"]').type('2023-05-08');
      cy.get('button').click();

      cy.get('[class="button new"]').click();
      cy.get('[placeholder="Descrição"]').type('bonificação');
      cy.get('[type="number"]').type('120');
      cy.get('[type="date"]').type('2023-05-09');
      cy.get('button').click();

      cy.get('[class="button new"]').click();
      cy.get('[placeholder="Descrição"]').type('adiantamento');
      cy.get('[type="number"]').type('400');
      cy.get('[type="date"]').type('2023-05-10');
      cy.get('button').click();

      cy.get('[class="button new"]').click();
      cy.get('[placeholder="Descrição"]').type('vendas');
      cy.get('[type="number"]').type('200');
      cy.get('[type="date"]').type('2023-05-10');
      cy.get('button').click();
        //saídas
      cy.get('[class="button new"]').click();
      cy.get('[placeholder="Descrição"]').type('gasolina');
      cy.get('[type="number"]').type('-150');
      cy.get('[type="date"]').type('2023-05-03');
      cy.get('button').click();

      cy.get('[class="button new"]').click();
      cy.get('[placeholder="Descrição"]').type('farmacia');
      cy.get('[type="number"]').type('-90');
      cy.get('[type="date"]').type('2023-05-06');
      cy.get('button').click();

      cy.get('[class="button new"]').click();
      cy.get('[placeholder="Descrição"]').type('mecanico');
      cy.get('[type="number"]').type('-350');
      cy.get('[type="date"]').type('2023-05-09');
      cy.get('button').click();

      cy.get('[class="button new"]').click();
      cy.get('[placeholder="Descrição"]').type('emprestimo');
      cy.get('[type="number"]').type('-590');
      cy.get('[type="date"]').type('2023-05-10');
      cy.get('button').click();

      cy.get('[class="button new"]').click();
      cy.get('[placeholder="Descrição"]').type('restaurante');
      cy.get('[type="number"]').type('-120');
      cy.get('[type="date"]').type('2023-05-10');
      cy.get('button').click();
      cy.get('#data-table tbody tr').should('have.length',10);  // confirmna se a tabela esta com 10 inserções
        
    });

    it('botao cancelar', () => {

      cy.get('#data-table tbody tr').should('have.length',0) // confirma se a tabela esta vazia
      cy.get('[class="button new"]').click();
      cy.get('[placeholder="Descrição"]').type('restaurante');
      cy.get('[type="number"]').type('-120');
      cy.get('[type="date"]').type('2023-05-10');
      cy.get('.actions > .button').click();
      cy.get('#data-table tbody tr').should('have.length',0) // confirma se a tabela esta vazia


    });
});