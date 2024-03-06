#include<iostream>
using namespace std;

class node {
public:
    int value;
    node* next;
    node(int y) {
        value = y;
        next = NULL;
    }
};

void llist(node* &head, int value) {
    node* listnode = new node(value);
    if (head == NULL) {
        head = listnode;
        return;
    }
    node* temp = head;
    while (temp->next != NULL) {
        temp = temp->next;
    }
    temp->next = listnode;
}
void equalornot(node * head ){

}
void display(node* head) {
    node* temp = head;
    while (temp != NULL) {
        cout << temp->value << " ";
        temp = temp->next;
    } cout << endl ;
}

int main() {
    node* head = NULL;
    node * head1= NULL;
    for (int i = 0; i < 10; i++) {
        llist(head, i);
    }
    for(int j = 0 ; j<10; j++){
        llist(head1, j );
    }
    display(head);
    display(head1);
}