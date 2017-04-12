import * as chai from 'chai'
const expect = chai.expect

import { Account } from '../../src/models/account'
import { Email } from '../../src/models/email'
import { AccountsStore } from '../../src/shared-process/accounts-store'
import { InMemoryStore } from '../in-memory-store'

describe('AccountsStore', () => {
  let accountsStore: AccountsStore | null = null
  beforeEach(() => {
    accountsStore = new AccountsStore(new InMemoryStore(), new InMemoryStore())
  })

  describe('adding a new user', () => {
    it('contains the added user', () => {
      const newAccountLogin = 'tonald-drump'
      accountsStore!.addAccount(new Account(newAccountLogin, '', '', new Array<Email>(), '', 1, ''))

      const users = accountsStore!.getAll()
      expect(users[0].login).to.equal(newAccountLogin)
    })
  })
})